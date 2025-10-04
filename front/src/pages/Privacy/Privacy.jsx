import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Privacy.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Privacy = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className='privacy-page'>
      <div className='back-button' onClick={handleBackClick}>
        <img src={back_arrow_icon} alt="Back" />
        <span>Back</span>
      </div>
      
      <div className='content-container'>
        <h1>Privacy Policy</h1>
        
        <div className='content-section'>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us and information we obtain when you use our service.</p>
          <div className='privacy-item'>
            <h3>Personal Information</h3>
            <ul>
              <li>Account information (name, email, payment details)</li>
              <li>Profile information and preferences</li>
              <li>Communication data when you contact us</li>
            </ul>
          </div>
          <div className='privacy-item'>
            <h3>Usage Information</h3>
            <ul>
              <li>Viewing history and watch progress</li>
              <li>Device information and IP address</li>
              <li>Search queries and interactions</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our service.</p>
          <div className='usage-details'>
            <h3>Primary Uses</h3>
            <ul>
              <li>Provide personalized content recommendations</li>
              <li>Process payments and manage subscriptions</li>
              <li>Communicate with you about our service</li>
              <li>Improve our platform and develop new features</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Information Sharing</h2>
          <p>We do not sell your personal information. We may share information in limited circumstances:</p>
          <div className='sharing-info'>
            <h3>When We Share</h3>
            <ul>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With your explicit consent</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
          <div className='security-measures'>
            <h3>Security Practices</h3>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Your Rights and Choices</h2>
          <p>You have certain rights regarding your personal information:</p>
          <div className='rights-info'>
            <h3>Your Rights</h3>
            <ul>
              <li>Access and update your account information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Object to certain processing activities</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to enhance your experience and analyze usage.</p>
          <div className='cookie-info'>
            <h3>Types of Cookies</h3>
            <ul>
              <li>Essential cookies for service functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>International Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own.</p>
          <div className='transfer-info'>
            <p>We ensure appropriate safeguards are in place for international data transfers in accordance with applicable laws.</p>
          </div>
        </div>

        <div className='content-section'>
          <h2>Children's Privacy</h2>
          <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
        </div>

        <div className='content-section'>
          <h2>Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any material changes.</p>
          <div className='update-info'>
            <p><strong>Last Updated:</strong> December 1, 2024</p>
          </div>
        </div>

        <div className='content-section'>
          <h2>Contact Us</h2>
          <div className='contact-info'>
            <p><strong>Privacy Questions:</strong> privacy@netflix.com</p>
            <p><strong>Data Protection Officer:</strong> dpo@netflix.com</p>
            <p><strong>Address:</strong> Netflix, Inc., 100 Winchester Circle, Los Gatos, CA 95032</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
