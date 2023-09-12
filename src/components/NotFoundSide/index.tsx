import NotFoundIcon from "../../assets/404.svg";
import { useLogin } from "../../hooks/useLogin";
import './index.css';

function NotFoundSide() {
    const { goToLogin } = useLogin();

    return (
        <>
            <div className='not-found-container'>
                <img src={NotFoundIcon} alt="Not found icon" className="not-found-icon" />
                <h3>The page you requested was not found</h3>
                <button className="ui button btn-login fluid" type="button" onClick={goToLogin}>Back to Login</button>
            </div>
        </>
    );
}

export default NotFoundSide;