import React from 'react';
import './FooterLinks.css';

function FooterLinks() {
  return (
    <div className="footer-links">
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Stores</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Customers</h4>
        <ul>
          <li><a href="#">How Groccy Works</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Partner With Us</h4>
        <ul>
          <li><a href="#">Become a Vendor</a></li>
          <li><a href="#">Add Your Store</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
