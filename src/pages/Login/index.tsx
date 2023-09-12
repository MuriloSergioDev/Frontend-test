import LoginCard from '../../components/LoginCard';
import LoginForm from '../../components/LoginForm';
import './index.css';

function Login() {
    return (
        <>
            <div className="main-container">
                <LoginCard>
                    <LoginForm />
                </LoginCard>
            </div>
        </>
    );
}

export default Login;