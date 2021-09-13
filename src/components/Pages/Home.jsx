import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoggedOutUser } from "../../actions/actions";



const Home = ({history}) => {

    const dispatch = useDispatch();

    const logout = () => {
        const auth = getAuth();
        auth.signOut();
        dispatch(LoggedOutUser());
        history.push('./login')
    }

    return(<>
    <h1>Home page</h1>
    <button onClick={logout}>Logout</button>
    </>)
}

export default Home;