import LoginLogo from "./LoginLogo";
import './index.css';

interface LoginCardProps {
    children: React.ReactNode
}

function LoginCard({ children }: LoginCardProps) {
    return (
        <>
            <div className="login-container">
                <LoginLogo />
                <div className="login-side-container">
                    {children}
                </div>
            </div>
        </>
    );
}

export default LoginCard;