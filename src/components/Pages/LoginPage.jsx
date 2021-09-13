import "../Style/loginPage.css";
import { Link } from "react-router-dom";
import loginImg from "../Images/login.svg";
import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LoggedInUser } from "../../actions/actions";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {user} = useSelector((state)=> ({...state}))

  useEffect(()=>{
    if(user && user.token){
        history.push('/')
    }
  }, [user, history])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    if(!email && !password){
      toast.error(`please enter email and password`)
        setLoading(false);
        return;
    }


    if(!email){
      toast.error(`please enter email`)
        setLoading(false);
        return;
    }

    if(!password){
      toast.error(`please enter password`)
        setLoading(false);
        return;
    }




    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const idTokenResult = await user.getIdTokenResult();

        dispatch(LoggedInUser(user, idTokenResult.token));
        history.push("/");
        // ...
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  const googleLogin = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // const credential = await GoogleAuthProvider.credentialFromResult(
        //   result
        // );
        // const token = await credential.accessToken;
        const user = await result.user;
        const idTokenResult = await user.idTokenResult;
        console.log(user, idTokenResult);
        dispatch(LoggedInUser(user, user.accessToken));
        history.push("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(error.message);
        // ...
        // console.log(error);
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-lg-container">
          <h1 className="login-h1">Welcome Back!</h1>
          <form action="/" method="">
            <label className="login-label">
              Email
              <input
                className="login-input"
                type="email"
                name="email"
                placeholder="Enter yout email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label className="login-label">
              Password
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Enter yout password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <label htmlFor="" className="login-label-checkbox">
              {/* <input
                className="login-input-checkbox"
                type="checkbox"
                name=""
                id=""
              />{" "} */}
              {/* <span>Remember Me</span>{" "} */}
              <Link className="login-forgot-pass" to="/forgot/password">
                {" "}
                forgot password?
              </Link>{" "}
            </label>
            <button
              className="login-login"
              onClick={handleSubmit}
            >
              {loading ? <i class='fa fa-spinner fa-spin '></i> : "Login" }
            </button>
            <button className="login-login-with-google" onClick={googleLogin}>
              Login with google
            </button>
            <Link to="/register">
              <button className="login-sign-up">Sign-up</button>
            </Link>
          </form>
        </div>
        <img className="login-svg" src={loginImg} alt="" />
      </div>
    </>
  );
};

export default LoginPage;
