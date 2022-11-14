import React, { useState } from 'react';
import Header from '../Header/Header';
import '../Navigation/Navigation.css';
import NavigationMenuDesktop from './NavigationMenuDesktop/NavigationMenuDesktop';
import NavigationMenuMobile from './NavigationMenuMobile/NavigationMenuMobile';

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Header>
      <nav className="navigation__container">
        <button
          onClick={toggleMenuVisible}
          className="navigation__hamburger"
        ></button>
        {isMenuVisible && <div className="navigation__cover" />}
        <div
          className={
            !isMenuVisible
              ? 'navigation__slide navigation__slide_slide-in'
              : 'navigation__slide navigation__slide_slide-out'
          }
        >
          <button
            className="navigation__slide-close"
            onClick={toggleMenuVisible}
          ></button>
          <NavigationMenuMobile />
        </div>
        <NavigationMenuDesktop />
      </nav>
    </Header>
  );
};

export default Navigation;
