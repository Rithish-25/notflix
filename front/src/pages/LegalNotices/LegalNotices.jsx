import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LegalNotices.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const LegalNotices = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className='legal-notices-page'>
      <div className='back-button' onClick={handleBackClick}>
        <img src={back_arrow_icon} alt="Back" />
        <span>Back</span>
      </div>
      
      <div className='content-container'>
        <h1>Legal Notices</h1>
        
        <div className='content-section'>
          <h2>Copyright Information</h2>
          <p>All content on this platform is protected by copyright laws. Unauthorized reproduction or distribution is strictly prohibited.</p>
          <div className='notice-item'>
            <h3>DMCA Policy</h3>
            <p>We respect intellectual property rights and respond to valid DMCA takedown notices.</p>
            <p><strong>Contact:</strong> legal@netflix.com</p>
          </div>
        </div>

        <div className='content-section'>
          <h2>Trademark Information</h2>
          <p>The Netflix name and logo are registered trademarks of Netflix, Inc. All rights reserved.</p>
          <div className='trademark-list'>
            <ul>
              <li>Netflix®</li>
              <li>Netflix Logo™</li>
              <li>Netflix Original™</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Content Licensing</h2>
          <p>All movies, TV shows, and other content are licensed for streaming through our platform only.</p>
          <div className='license-info'>
            <h3>Usage Restrictions</h3>
            <ul>
              <li>Content is for personal, non-commercial use only</li>
              <li>No downloading, copying, or redistribution allowed</li>
              <li>Geographic restrictions may apply</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Legal Compliance</h2>
          <p>We comply with all applicable laws and regulations in the jurisdictions where we operate.</p>
          <div className='compliance-info'>
            <h3>Regulatory Information</h3>
            <p>Netflix operates under various regulatory frameworks including:</p>
            <ul>
              <li>Federal Communications Commission (FCC) regulations</li>
              <li>International broadcasting standards</li>
              <li>Data protection and privacy laws</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Contact Legal Department</h2>
          <div className='contact-info'>
            <p><strong>General Legal Inquiries:</strong> legal@netflix.com</p>
            <p><strong>Copyright Issues:</strong> copyright@netflix.com</p>
            <p><strong>Address:</strong> Netflix, Inc., 100 Winchester Circle, Los Gatos, CA 95032</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalNotices
