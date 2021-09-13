import { useState, useEffect } from "react";
import loginImg from "../Images/login.svg";
import "../Style/registerPage.css";
// eslint-disable-next-line no-unused-vars
import { app } from "../../firebase";
import {
  signInWithEmailLink,
  getAuth,
  isSignInWithEmailLink,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const RegisterPage = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");


  const {user} = useSelector((state)=> ({...state}))

  useEffect(()=>{
    if(user && user.token){
        history.push('/')
    }
  }, [user, history])

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForSignIn"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !pass && !confirmPass) {
      toast.error("Email and password is required");
      return;
    }

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!pass) {
      toast.error("password is required");
      return;
    }

    if (!confirmPass) {
      toast.error("password is required");
      return;
    }

    if (pass !== confirmPass) {
      toast.error("Password doesn't match");
    }

    if (pass.length < 6) {
      toast.error("password must be at least 6 characters");
      return;
    }

    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then(async (result) => {
          window.localStorage.removeItem("emailForSignIn");
          if (result.user.emailVerified) {
            let user = auth.currentUser;
            console.log(user);
            await updateProfile(user, {
              displayName: `${firstName} ${lastName}`
            }).then(() => {
              console.log("Name set");
            }).catch((error) => {
              toast.error(error.message)
            });
            await updatePassword(user, pass)
            .then(() => {
              //.
            }).catch((error) => {
              toast.error(error.message)
            });

            const idTokenResult = await user.getIdTokenResult();

            console.log("user", user, "idtokenresult", idTokenResult);
          }
        })
        .catch((error) => {
          // console.log(error);
          toast.error(error.message);
        });
    }
    history.push('/')
  };

  return (
    <>
      <div className="rg-container">
        <div className="rg-register-container">
          <h1 className="rg-h1">Create your Account!</h1>
          <form action="/" method="" onSubmit={handleSubmit}>
            <div className="rg-name-input">
              <label className="rg-label">
                First Name
                <input
                  className="rg-input-fn"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first Name"
                  required={true}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
              </label>
              <label className="rg-label">
                Last Name
                <input
                  className="rg-input-ln"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last Name"
                  required={true}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
              </label>
            </div>
            <label className="rg-label">
              Email
              <input
                className="rg-input"
                type="email"
                name="email"
                value={email}
                disabled
              />
            </label>
            <label className="rg-label">
              Password
              <input
                className="rg-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                value={pass}
              />
            </label>
            <label className="rg-label">
              Confirm password
              <input
                className="rg-input"
                type="password"
                name="reEnterPassword"
                placeholder="Confirm password"
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
                value={confirmPass}
              />
            </label>
            <button className="rg-sign-up"> sign up </button>
            {/* <Link to="/login"><button className="rg-login">Login</button></Link>  */}
          </form>
        </div>
        <img className="rg-login-svg" src={loginImg} alt="" />
      </div>
    </>
  );
};

export default RegisterPage;
