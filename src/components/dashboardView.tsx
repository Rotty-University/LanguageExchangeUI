import {
    Link
} from "react-router-dom";
import Logo from "./library/logo";

function DashboardView() {
    return (
        <div className="content">
            <div className="dashboard-nav-container">
                <Logo />
                <div className="dashboard-nav-links">
                    <Link to="/dashboard/:usderId">
                        Dashboard
                    </Link>
                    <Link to="/profile/:usderId">
                        Account
                    </Link>
                    <Link to="">
                        Community
                    </Link>
                </div>
            </div>
            <div className="body-container">
                <div className="dashboard-input">
                    <span>Who would you like to see?</span>
                    <div className="call-selection-container">
                        <button className="call-type-button">Practice with native</button>
                        <span>or</span>
                        <button className="call-type-button">Practice with learner</button>
                    </div>
                    <span>Which language do you want to practice?</span>
                    <div className="language-container">
                        <button className="language-button">Language</button>
                        <button className="language-button">Language</button>
                        <button className="language-button">Language</button>
                    </div>
                </div>
                <button className="button-primary">Start a call</button>
            </div>
        </div>
    )
}

export default DashboardView;