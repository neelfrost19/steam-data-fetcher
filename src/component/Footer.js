import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {

  const photo = '/images/propic1.png';

  const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/'>Resume</Link>
            <Link
                to='/'
                onClick={() =>
                openInNewTab('https://www.youtube.com/watch?v=yr7P8fyo6uU')}
            >
            Youtube
            </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'
                  onClick={() =>
                  openInNewTab('https://www.linkedin.com/in/neelesh-kumar-das-600549166/')}
            >
            LinkedIn
            </Link>
            <Link
                to='/'
                onClick={() => openInNewTab('https://github.com/neelfrost19')}
            >GitHub
            </Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              FROST
              <img
                className="frost-pic"
                src={photo}
            />
            </Link>
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link youtube'
              to='/'
              onClick={() =>
                openInNewTab('https://www.youtube.com/watch?v=yr7P8fyo6uU')}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i
              className='fab fa-linkedin'
              onClick={() => openInNewTab('https://www.linkedin.com/in/neelesh-kumar-das-600549166/')}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
