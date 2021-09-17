import React from 'react';
import '../Style/footer.css'
import {Link} from 'react-router-dom'

function Footer(props) {
  return (
    <div id="footer_section">
    <div className="container-fluid" style={{backgroundColor:"#fff", padding:"30px 0px"}}>
    <div className="container text-dark">
      <div className="row text-start">
        <div className="col-md-4">

          <h3>Student Query portal</h3>
          <div className="footer-decoration"/>
          <br />
          <p className="footer-company-description footer-font-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus ullam quasi, aut harum magni</p>

        </div>
        <div className="col-md-4"><h3>USEFUL LINKS</h3>
          <div className="footer-decoration"></div>
          <br />
          <ul className="footer-ul font-small">
            <li className="footer-li footer-li-opacity"><Link className="text-dark text-decoration-none" to="/">Your Account</Link></li>
            <li className="footer-li footer-li-opacity"><Link className="text-dark text-decoration-none" to="/">QnA Page</Link></li>
            <li className="footer-li footer-li-opacity"><Link className="text-dark text-decoration-none" to="/">FAQ</Link></li>
            <li className="footer-li footer-li-opacity"><Link className="text-dark text-decoration-none" to="/aboutUs">About us</Link></li>
          </ul></div>
        <div className="col-md-4"><h3>Contact</h3>
          <div className="footer-decoration"/>
          <br />
          <ul className="footer-ul footer-font-small">
            <li className="footer-li"><i className="fas fa-briefcase"/> Ahmedabad,India.</li>
            <li className="footer-li"><i className="fas fa-envelope"/> support@sqp.com</li>
            <li className="footer-li"><i className="fas fa-phone"/> +91 9876543210 </li>
            <li className="footer-li"><i className="fas fa-phone"/> 1800 1899 1714</li>
          </ul></div>
      </div>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand m-auto" rel="noreferrer" target="_blank" to="https://github.com/untitled-team-101">&copy; UNTITLED TEAM</Link>
    </div>
  </nav>
  </div>
  );
}

export default Footer;