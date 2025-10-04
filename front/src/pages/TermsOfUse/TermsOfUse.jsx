import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TermsOfUse.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const TermsOfUse = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className='terms-of-use-page'>
      <div className='back-button' onClick={handleBackClick}>
        <img src={back_arrow_icon} alt="Back" />
        <span>Back</span>
      </div>
      
      <div className='content-container'>
        <h1>Terms of Use</h1>
        
        <div className='content-section'>
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using Netflix, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <div className='terms-item'>
            <h3>Last Updated</h3>
            <p>These terms were last updated on December 1, 2024.</p>
          </div>
        </div>

        <div className='content-section'>
          <h2>Service Description</h2>
          <p>Netflix provides streaming entertainment services including movies, TV shows, documentaries, and other content.</p>
          <div className='service-details'>
            <h3>What We Provide</h3>
            <ul>
              <li>Access to our streaming library</li>
              <li>Personalized recommendations</li>
              <li>Multiple device support</li>
              <li>Download for offline viewing (where available)</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>User Responsibilities</h2>
          <p>As a Netflix user, you agree to use our service responsibly and in accordance with these terms.</p>
          <div className='responsibilities'>
            <h3>You Agree To:</h3>
            <ul>
              <li>Provide accurate account information</li>
              <li>Keep your password secure</li>
              <li>Use the service for personal, non-commercial purposes</li>
              <li>Not share your account with others</li>
              <li>Not attempt to circumvent any security measures</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Prohibited Uses</h2>
          <p>The following activities are strictly prohibited on our platform:</p>
          <div className='prohibited-list'>
            <ul>
              <li>Downloading or copying content illegally</li>
              <li>Sharing account credentials</li>
              <li>Using automated tools to access content</li>
              <li>Reverse engineering our software</li>
              <li>Violating any applicable laws</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Subscription and Billing</h2>
          <p>Subscription fees are billed in advance and are non-refundable except as required by law.</p>
          <div className='billing-info'>
            <h3>Billing Terms</h3>
            <ul>
              <li>Monthly subscription fees are charged automatically</li>
              <li>You can cancel your subscription at any time</li>
              <li>Access continues until the end of your billing period</li>
              <li>Price changes will be communicated in advance</li>
            </ul>
          </div>
        </div>

        <div className='content-section'>
          <h2>Limitation of Liability</h2>
          <p>Netflix's liability is limited to the maximum extent permitted by law.</p>
          <div className='liability-info'>
            <p>We are not responsible for any indirect, incidental, or consequential damages arising from your use of our service.</p>
          </div>
        </div>

        <div className='content-section'>
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>
        </div>

        <div className='content-section'>
          <h2>Contact Information</h2>
          <div className='contact-info'>
            <p><strong>Customer Service:</strong> help@netflix.com</p>
            <p><strong>Legal Department:</strong> legal@netflix.com</p>
            <p><strong>Address:</strong> Netflix, Inc., 100 Winchester Circle, Los Gatos, CA 95032</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfUse
