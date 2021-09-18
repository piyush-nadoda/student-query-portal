import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoggedOutUser } from "../../actions/actions";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";
import "../Style/home.css";
import fc from "../Images/illustration-flowing-conversation.svg";
import gt from "../Images/illustration-grow-together.svg";
import yu from "../Images/illustration-your-users.svg";
import im from "../Images/illustration-mockups.svg";

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
            <img className="home-mockup" src={im} alt="" />
            <div className="home-container-mockup-text">
              <h1 className="home-mockup-heading">
                {/* CREATE SPACE FOR STUDENT TO FIND SOLUTIONS */}
                Space for education
              </h1>
              <p className="home-mockup-subheading">
                If somebody somewhere has the right answer, suddenly you have it
                too. Collaborate better in a remote-first world.
              </p>
              {/* <button className="home-mockup-btn">Get Started For Free</button> */}
            </div>
          </div>
        </div>
        <div className="home-container-grow-together">
          <img className="home-gt-mockup" src={gt} alt="" />
          <h1 className="home-gt-heading">Our Public Platform</h1>
          <p className="home-gt-text">
            Where Students/Faculty go to gain, learn, share their knowledge.
          </p>
        </div>
        <div className="home-container-flowing-conversations">
          <img className="home-fc-mockup" src={fc} alt="" />
          <h1 className="home-fc-heading">Keep community at our center</h1>
          <p className="home-fc-text">
            Community is at the heart of everything we do. Nurture healthy
            communities where everyone is encouraged to learn and give back.
          </p>
        </div>
        <div className="home-container-your-users">
          <img className="home-yu-mockup" src={yu} alt="" />
          <h1 className="home-yu-heading">Our Users</h1>
          <p className="home-yu-text">
            Once signed in to our app, users can start posting immediately.
          </p>
        </div>
      </div>
      <Footer />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
