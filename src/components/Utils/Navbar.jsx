import logo from "../Images/logo.svg";
import "../Style/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img className="navbar-logo" src={logo} alt="" />
        <ul className="navbar-main-list">
          <li className="navbar-home-btn">Home</li>
          <li className="navbar-qna-btn">QnA</li>
          <li className="navbar-about-us-btn">About Us</li>
          <li className="navbar-contact-us-btn">Contact Us</li>
        </ul>
        <ul className="navbar-user-list">
          <li>Register</li>
          <li>Login</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
