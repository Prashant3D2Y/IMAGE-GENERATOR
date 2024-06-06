import { useContext } from "react";
import PointsContext from "../../context/pointContext";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const contextValues = useContext(PointsContext);
    const page = props.page;

    const customColor = (x) => {
        return {color: page === x ? 'red' : 'white'}
    }

    return (
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customColor('home')} className={page === 'home' ? 'active' : ''}>Home</Link>
                <Link to="/image-generator" style={customColor('imageGenerator')} className={page === 'imageGenerator' ? 'active' : ''}>Image Generator</Link>
                <Link to="/history" style={customColor('history')} className={page === 'history' ? 'active' : ''}>History</Link>
                <Link to="/signup" style={customColor('signup')} className={page === 'signup' ? 'active' : ''}>Signup</Link>
                <Link to="/login" style={customColor('login')} className={page === 'login' ? 'active' : ''}>Login</Link>
            </div>
            <div className="right">
                {contextValues.userPoints}
            </div>
            {contextValues.isLoggedIn ? 
                <button onClick={contextValues.logout}>Logout</button> : 
                <button onClick={contextValues.login}>Login</button>
            }
        </div>
    )
}

export default Navbar;
