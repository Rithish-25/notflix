import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AboutUs.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const AboutUs = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className='about-us-page'>
      <div className='back-button' onClick={handleBackClick}>
        <img src={back_arrow_icon} alt="Back" />
        <span>Back</span>
      </div>
      
      <div className='content-container'>
        <h1>About Netflix</h1>
        
        <div className='content-section'>
          <h2>Our Story</h2>
          <p>Netflix is the world's leading streaming entertainment service with over 200 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages.</p>
          <div className='story-item'>
            <h3>Founded in 1997</h3>
            <p>Started as a DVD-by-mail service, Netflix has evolved into a global streaming platform that entertains millions worldwide.</p>
          </div>
        </div>

        <div className='content-section'>
          <h2>Our Mission</h2>
          <p>We want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV shows, movies and documentaries.</p>
          <div className='mission-details'>
            <h3>What We Do</h3>
            <ul>
              <li>Create original content that resonates globally</li>
              <li>Provide personalized recommendations</li>
              <li>Support diverse voices and stories</li>
              <li>Make entertainment accessible everywhere</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Our Values</h2>
          <p>Our culture is built on freedom and responsibility, where we encourage our employees to make decisions that benefit Netflix.</p>
          <div className='values-grid'>
            <div className='value-item'>
              <h4>Inclusion</h4>
              <p>We believe in creating an inclusive environment where everyone can thrive.</p>
            </div>
            <div className='value-item'>
              <h4>Innovation</h4>
              <p>We constantly push boundaries to improve the entertainment experience.</p>
            </div>
            <div className='value-item'>
              <h4>Integrity</h4>
              <p>We act with integrity and transparency in everything we do.</p>
            </div>
            <div className='value-item'>
              <h4>Impact</h4>
              <p>We strive to make a positive impact on society through our content.</p>
            </div>
          </div>
        </div>

        <div className='content-section'>
          <h2>Global Reach</h2>
          <p>Netflix is available in over 190 countries, bringing diverse stories to audiences worldwide.</p>
          <div className='global-stats'>
            <div className='stat-item'>
              <h3>200M+</h3>
              <p>Paid Memberships</p>
            </div>
            <div className='stat-item'>
              <h3>190+</h3>
              <p>Countries</p>
            </div>
            <div className='stat-item'>
              <h3>15,000+</h3>
              <p>Original Titles</p>
            </div>
            <div className='stat-item'>
              <h3>50+</h3>
              <p>Languages</p>
            </div>
          </div>
        </div>

        <div className='content-section'>
          <h2>Technology & Innovation</h2>
          <p>We use cutting-edge technology to deliver the best streaming experience possible.</p>
          <div className='tech-info'>
            <h3>Our Technology</h3>
            <ul>
              <li>Advanced recommendation algorithms</li>
              <li>Adaptive streaming technology</li>
              <li>Global content delivery network</li>
              <li>Machine learning for personalization</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Sustainability</h2>
          <p>We're committed to reducing our environmental impact and creating a more sustainable future.</p>
          <div className='sustainability-info'>
            <h3>Our Commitment</h3>
            <ul>
              <li>Carbon neutral by 2022</li>
              <li>Renewable energy for our operations</li>
              <li>Sustainable production practices</li>
              <li>Environmental storytelling</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Careers</h2>
          <p>Join our team and help us entertain the world. We're always looking for talented individuals who share our passion for great storytelling.</p>
          <div className='careers-info'>
            <h3>Why Work at Netflix</h3>
            <ul>
              <li>Freedom and responsibility culture</li>
              <li>Competitive compensation</li>
              <li>Global impact and reach</li>
              <li>Innovation and creativity</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Contact Information</h2>
          <div className='contact-info'>
            <p><strong>Headquarters:</strong> Netflix, Inc., 100 Winchester Circle, Los Gatos, CA 95032</p>
            <p><strong>Investor Relations:</strong> ir@netflix.com</p>
            <p><strong>Press Inquiries:</strong> press@netflix.com</p>
            <p><strong>General Information:</strong> info@netflix.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
