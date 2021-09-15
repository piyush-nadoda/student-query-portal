import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoggedOutUser } from "../../actions/actions";
import AboutUs from "../Utils/AboutUs";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";

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
      <AboutUs/>
      <Footer/>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
