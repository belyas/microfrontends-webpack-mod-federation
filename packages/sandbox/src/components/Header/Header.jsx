const Header = () => (
  <nav className="navbar">
    <div className="navbar-center">
        <span className="nav-icon">
            <i className="fas fa-bars"></i>
        </span>
        <img src="/public/images/logo.png" alt="Shop" />
        <div className="cart-btn">
            <span className="nav-icon">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </span>
            <div className="cart-items">0</div>
        </div>
    </div>
  </nav>
);

export default Header;
