import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoggedOutUser } from "../../actions/actions";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";
import "../Style/home.css";
import fc from "../Images/illustration-flowing-conversation.svg";
import gt from "../Images/illustration-grow-together.svg";
import yu from "../Images/illustration-your-users.svg";
import im from '../Images/illustration-mockups.svg'

const Home = ({ history }) => {
  const dispatch = useDispatch();

  const logout = () => {
    const auth = getAuth();
    auth.signOut();
    dispatch(LoggedOutUser());
    history.push("./login");
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="home-container-top">
          <div className="home-container-mockup">
            <img
              className="home-mockup"
              src={im}
              alt=""
            />
            <div className="home-container-mockup-text">
              <h1 className="home-mockup-heading">
                Build The Community
              </h1>
              <p className="home-mockup-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam in nisi voluptatibus modi. Praesentium, provident.
              </p>
              {/* <button className="home-mockup-btn">Get Started For Free</button> */}
            </div>
          </div>
        </div>
        <div className="home-container-grow-together">
          <img className="home-gt-mockup" src={gt} alt="" />
          <h1 className="home-gt-heading">Grow Together</h1>
          <p className="home-gt-text">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div className="home-container-flowing-conversations">
          <img className="home-fc-mockup" src={fc} alt="" />
          <h1 className="home-fc-heading">Flowing Conversations</h1>
          <p className="home-fc-text">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
        <div className="home-container-your-users">
          <img className="home-yu-mockup" src={yu} alt="" />
          <h1 className="home-yu-heading">Our Users</h1>
          <p className="home-yu-text">
            Once signed in to our app,
            users can start posting immediately.
          </p>
        </div>
      </div>
      <Footer />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
