
import logo from "../../../assets/logo.png";
import './index.css';

function LoginLogo() {
    return (
        <>
            <div className="logo-container">
                <img src={logo} alt="Company logo" width={90}></img>
                <span>CleanMyCar</span>
                <p>India's first waterless car cleaning company</p>
            </div>
        </>
    );
}

export default LoginLogo;