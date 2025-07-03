import React from 'react'
import './DownloadSection.css'

function DownloadSection() {
  return (
    <div className="download-section">
      <p className="download-title">Download App</p>
      <div className="store-buttons">
        <img src="/playstore.png" alt="Get it on Google Play" />
        <img src="/appstore.png" alt="Download on the App Store" />
      </div>
    </div>
  )
}

export default DownloadSection
