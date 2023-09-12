import LoginCard from "../../components/LoginCard";
import NotFoundSide from "../../components/NotFoundSide";

function NotFound() {
    return (
        <>
            <div className="main-container">
                <LoginCard>
                    <NotFoundSide />
                </LoginCard>
            </div>
        </>
    );
}

export default NotFound;