import ForgotPasswordForm from "../../components/ForgotPasswordForm";
import LoginCard from "../../components/LoginCard";

function ForgotPassword() {
    return (
        <>
            <div className="main-container">
                <LoginCard>
                    <ForgotPasswordForm />
                </LoginCard>
            </div>
        </>
    );
}

export default ForgotPassword;