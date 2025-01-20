import React from 'react'
import { Container } from 'react-bootstrap'
import Loginpanel from '../../Commponet/Login-Regiseter/Loginpanel'
import Navbarcomponent from '../../Commponet/Utility/Navbar'
import Loader from '../../Commponet/Login-Regiseter/Sticker'
import '../../index.css'
export default function Login() {
  return (
    
    <div>
      <Navbarcomponent />
      <div className="container-custom">
        {/* Login Panel */}
        <div className="login-container">
          <Loginpanel />
        </div>

        {/* Welcome Section */}
        <div className="welcome-section">
          <h1 className="welcome-title">Welcome to the online store</h1>
          <h2 className="welcome-subtitle">
            Here you can find any product you need or sell any product you have.
          </h2>
          <div className="loader-container">
            <Loader />
          </div>
        </div>
      </div>
    </div>
  )
}
