import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import cards_data from '../../assets/cards/Cards_data'

const Player = () => {

  const {id} = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToViewingHistory } = useAppContext();
  const contentType = searchParams.get('type') || 'movie';

const [apiData, setApiData] = useState({
  name: "",
  key: "",
  published_at: "",
  type: ""
})

const [movieDetails, setMovieDetails] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [isLocalContent, setIsLocalContent] = useState(false);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2FjYzVlOGIxYTljNzM2ZGM3OThjNDllM2M5MDY5ZiIsIm5iZiI6MTc1MTc3NjU5MS4yODEsInN1YiI6IjY4NjlmZDRmOWRiZTkxODkxNjEwMzI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wQarnuqPkkSaKXTyjUmHfFt32hF8O6d828L_pqvi28s'
  }
};

useEffect(()=>{
  // Check if this is local content (from cards_data)
  const localCard = cards_data.find(card => card.name.toLowerCase().replace(/\s+/g, '') === id.toLowerCase().replace(/\s+/g, ''));
  
  if (localCard) {
    // Handle local content
    setIsLocalContent(true);
    setApiData({
      name: `${localCard.name} - Trailer`,
      key: "dQw4w9WgXcQ", // Rick Roll as placeholder - you can replace with actual trailer IDs
      published_at: "2024-01-01",
      type: "Trailer"
    });
    setMovieDetails({
      title: localCard.name,
      overview: `Experience the amazing story of ${localCard.name}. A must-watch content that will keep you entertained.`,
      vote_average: 8.5,
      release_date: "2024-01-01",
      runtime: 120,
      genres: [{ name: "Action" }, { name: "Drama" }]
    });
    setLoading(false);
  } else {
    // Handle TMDB content
    setIsLocalContent(false);
    
    // Fetch video data
    const videoUrl = contentType === 'tv' 
      ? `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
      : `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      
    fetch(videoUrl, options)
    .then(res => res.json())
    .then(res => {
      if (res.results && res.results.length > 0) {
        setApiData(res.results[0]);
      } else {
        setError('No video available for this content');
      }
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setError('Failed to load video');
      setLoading(false);
    });

    // Fetch content details for history tracking
    const detailsUrl = contentType === 'tv'
      ? `https://api.themoviedb.org/3/tv/${id}?language=en-US`
      : `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      
    fetch(detailsUrl, options)
    .then(res => res.json())
    .then(contentInfo => {
      if (contentInfo && contentInfo.success !== false) {
        setMovieDetails(contentInfo);
        addToViewingHistory(contentInfo);
      }
    })
    .catch(err => {
      console.log('History tracking failed:', err);
    });
  }
},[id, contentType])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      
      {loading && (
        <div className="loading-message">
          <p>Loading video...</p>
        </div>
      )}
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <p>This content may not have a trailer available.</p>
        </div>
      )}
      
      {!loading && !error && apiData.key && (
        <>
          <iframe 
            width='90%' 
            height='90%' 
            src={`https://www.youtube.com/embed/${apiData.key}`} 
            title='trailer' 
            frameBorder='0' 
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <div className="video-details">
              <h2>{movieDetails?.title || movieDetails?.name || 'Video'}</h2>
              <p className="overview">{movieDetails?.overview || 'No description available.'}</p>
              <div className="meta-info">
                <span className="rating">⭐ {movieDetails?.vote_average?.toFixed(1) || 'N/A'}</span>
                <span className="year">
                  {movieDetails?.release_date?.slice(0, 4) || movieDetails?.first_air_date?.slice(0, 4) || 'N/A'}
                </span>
                <span className="runtime">
                  {movieDetails?.runtime ? `${movieDetails.runtime} min` : 
                   movieDetails?.episode_run_time ? `${movieDetails.episode_run_time[0]} min` : 'N/A'}
                </span>
                {isLocalContent && <span className="local-badge">Local Content</span>}
              </div>
              <div className="genres">
                {movieDetails?.genres?.map((genre, index) => (
                  <span key={index} className="genre-tag">{genre.name}</span>
                ))}
              </div>
            </div>
            <div className="video-meta">
              <p><strong>Video:</strong> {apiData.name || 'Trailer'}</p>
              <p><strong>Type:</strong> {apiData.type || 'Trailer'}</p>
              <p><strong>Date:</strong> {apiData.published_at ? apiData.published_at.slice(0,10) : 'N/A'}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Player