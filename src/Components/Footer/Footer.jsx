import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import linkedin_icon from "../../assets/linkedin_icon.png"
import github_icon from "../../assets/github_icon.png"
import gmail_icon from "../../assets/gmail_icon.png"

const Footer = () => {
  return (
    <footer className='footer'>

        <div className="footer-top">

            <div className="footer-logo">
                <img src={logo} alt="" />
                <h2>Shopify</h2>
            </div>

            <ul className='footer-links'>
                <li>About</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Company</li>
                <li>Contact</li>
            </ul>

            <div className='footer-social-icon'>
                <a 
                  href="https://linkedin.com/in/deepak-rathour-05sep2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-icon-container"
                >
                  <img src={linkedin_icon} alt="LinkedIn" />
                </a>

                <a 
                  href="https://github.com/techbydeepak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-icon-container"
                >
                  <img src={github_icon} alt="GitHub" />
                </a>

                <a 
                  href="mailto:deepakrathour05tech@gmail.com"
                  className="footer-icon-container"
                >
                  <img src={gmail_icon} alt="Gmail" />
                </a>
            </div>

        </div>

        <div className="footer-bottom">
            <p>© 2026 Shopify. All Rights Reserved.</p>
        </div>

    </footer>
  )
}

export default Footer
