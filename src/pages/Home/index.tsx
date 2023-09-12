import HomeSide from "../../components/HomeSide";
import LoginCard from "../../components/LoginCard";

function Home() {
    return (
        <>
            <div className="main-container">
                <LoginCard>
                    <HomeSide />
                </LoginCard>
            </div>
        </>
    );
}

export default Home;