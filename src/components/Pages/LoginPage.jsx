import '../Style/loginPage.css'
import {Link} from "react-router-dom";
import loginImg from '../Images/login.svg'

const LoginPage = () => {
    return(<>
        <div className="login-container">
            <div className="login-lg-container">
            <h1 className="login-h1">Welcome Back!</h1>
            <form action="/" method="">
                <label className="login-label">Email
                <input className="login-input" type="email"name="email" placeholder="Enter yout email"/></label>
                <label className="login-label">Password
                <input className="login-input" type="password" name="password" placeholder="Enter yout password"/></label>
                <label htmlFor="" className="login-label-checkbox"><input className="login-input-checkbox" type="checkbox" name="" id="" /> <span>Remember Me</span> <Link className="login-forgot-pass" to="/password"> forgot password?</Link> </label>
                <button className="login-login">Login</button>
                <Link to="/register"><button className="login-sign-up">Sign-up</button></Link>
            </form></div>
            <img className="login-svg" src={loginImg} alt="" />
            </div>
        </>)
}

export default LoginPage;