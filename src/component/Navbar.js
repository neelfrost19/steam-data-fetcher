import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuButton, setMenuButton] = useState(false);
  const [buttonVis, setButtonVis] = useState(true);
  const photo = '/images/propic1.png';
  const photo1 = '/images/rust.jpg';
  const photo2 = '/images/csgo.png';


  const handleMenuButton = () => {
    setMenuButton(!menuButton);
  }


  const closeMobileMenu = () => {
    setMenuButton(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButtonVis(false);
    } else {
      setButtonVis(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div //to='/'
          className='navbar-logo' onClick={closeMobileMenu}>
            FROST
            <img
                className="frost-pic"
                src={photo}
            />
          </div>
          <div className='menu-icon' onClick={handleMenuButton}>
            <i className={menuButton ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={menuButton ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href="#backvideo"
                className='nav-links'
                onClick={closeMobileMenu}
                >
                RUST
                <img
                    className="frost-pic"
                    src={photo1}
                />
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="#project"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CSGO
                <img
                    className="frost-pic"
                    src={photo2}
                />
              </a>
            </li>

            <li>
              <div
                //to='/data'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Wanna watch a rust giga chad?
              </div>
            </li>
          </ul>
          {buttonVis && <Button style='btn--outline'> Wanna watch a rust giga chad?</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
