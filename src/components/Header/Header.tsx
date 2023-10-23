import './header.scss';

import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a className="header__logo" href='/'>
          <img
            className='header__logo-img'
            src={logo}
            alt="logo"
          />
        </a>

        <nav className="header__menu">
          <a href="/home" className="header__menu-link active-menu-link">home</a>
          <a href="/phones" className="header__menu-link">phones</a>
          <a href="/tablets" className="header__menu-link">tablets</a>
          <a href="/accessories" className="header__menu-link">accessories</a>
        </nav>
      </div>

    <div className="header__right">
      <div className="header__icons">
        <i className="icon icon--menu" />
        <i className="icon icon--favourites" />
        <i className="icon icon--shopping-bag" />
      </div>
    </div>
  </header>
  )
}
