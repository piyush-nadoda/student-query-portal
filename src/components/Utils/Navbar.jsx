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
          <li className="navbar-home-btn">Home</li>
          <li className="navbar-qna-btn">QnA</li>
          <li className="navbar-about-us-btn">  <a className="navbar-link" href="#about_us_section"> About Us</a></li>
          <li className="navbar-contact-us-btn"> <a className="navbar-link" href="#footer_section">Contact Us</a></li>
        </ul>
        <ul className="navbar-user-list">
          <li><a className="navbar-link" href="/register">Register</a></li>
          <li><a className="navbar-link" href="/login">Login</a></li>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/feed">
                QnA
              </a>
              <a className="nav-link" href="#about_us_section">
                About Us
              </a>
              <a className="nav-link" href="#footer_section">Contact Us</a>
              <hr />
              <a className="nav-link" href="/register">Register</a>
              <a className="nav-link" href="/login">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
