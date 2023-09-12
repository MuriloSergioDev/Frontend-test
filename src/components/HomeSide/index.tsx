import welcomeIcon from "../../assets/welcome.svg";
import { useLogin } from "../../hooks/useLogin";
import './index.css';

function HomeSide() {

    const { handleLogOut } = useLogin();

    return (
        <div className='help-side-container'>
            <img src={welcomeIcon} alt="Question icon" className="home-icon" />
            <h3>You logged in</h3>
            <button className="ui button btn-login fluid " type="button" onClick={handleLogOut}>Log out</button>
        </div>
    );
}

export default HomeSide;