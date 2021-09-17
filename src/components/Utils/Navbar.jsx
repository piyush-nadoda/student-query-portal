import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import "../Style/navbar.css";

const Navbar = () => {
  let y = document.querySelectorAll(".box");
  y.forEach((element) => {
    element.onclick = function (e) {
      var head = e.currentTarget;
      head.classList.add("trans");
      setTimeout(function () {
        head.classList.toggle("active");
      }, 280);
    };
  });
  return (
    <>
      <nav className="navbar-main">
        <img className="navbar-logo" src={logo} alt="" />
        <div class="menu-toggle">
          <span>
            <section class="classic">
              <div class="center-content">
                <div class="box box-five">
                  <span class="ba bar-1"></span>
                  <span class="ba bar-2"></span>
                  <span class="ba bar-3"></span>
                </div>
              </div>
            </section>
          </span>
        </div>
        <ul className="navbar-main-list">
          <li className="navbar-home-btn"><Link className="navbar-link" to="/">Home</Link></li>
          <li className="navbar-qna-btn">QnA</li>
          <li className="navbar-about-us-btn">  <Link className="navbar-link" to="/aboutus"> About Us</Link></li>
          <li className="navbar-contact-us-btn"> <a className="navbar-link" href="#footer_section">Contact Us</a></li>
        </ul>
        <ul className="navbar-user-list">
          <li><Link className="navbar-link" to="/register">Register</Link></li>
          <li><Link className="navbar-link" to="/login">Login</Link></li>
        </ul>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className="navbar-logo" src={logo} alt="" />
          <button
            className="navbar-toggler"
            style={{border:"none"}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              id="toggle"
              onClick={(e) =>
                document.querySelector("#toggle").classList.toggle("on")
              }
            >
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <a className="nav-link" href="/feed">
                QnA
              </a>
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
              <a className="nav-link" href="#footer_section">Contact Us</a>
              <hr />
              <Link className="nav-link" to="/register">Register</Link>
              <Link className="nav-link" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
