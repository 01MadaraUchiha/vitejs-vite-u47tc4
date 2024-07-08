import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/facebook-icon.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/twitter-icon.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://instagram.com"
            alt="https://imgs.search.brave.com/d-J_drpN2AYgULX5rOgVEzRsYfMc-JMxvLy-NwnBEVg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMzLzIxLzYx/LzM2MF9GXzMzMzIx/NjE4MF8wY0RMeTNl/WWQ0dkFmR2V2ajJm/bHJaVVR3eHBKUkZk/SC5qcGc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/instagram-icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
        <p>© 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
