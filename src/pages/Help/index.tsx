import HelpSide from "../../components/HelpSide";
import LoginCard from "../../components/LoginCard";

function Help() {
    return (
        <>
            <div className="main-container">
                <LoginCard>
                    <HelpSide />
                </LoginCard>
            </div>
        </>
    );
}

export default Help;