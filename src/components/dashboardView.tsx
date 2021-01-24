import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function DashboardView() {
    return (
        <div className="content">
            <div className="navigation-container">
                <img src={""} alt={"logo"} />
                <Link to="/profile/:usderId">
                    Account
                </Link>
            </div>
            <div className="body-container">
                <div className="dashboard-input">
                    <span>What would you like to see?</span>
                    <button>Practice with native</button>
                    <button>Practice with learner</button>
                    <span>Which language do you want to practice?</span>
                    <button>Language</button>
                    <button>Language</button>
                    <button>Language</button>
                </div>
                <button>Start a call</button>
            </div>
        </div>
    )
}

export default DashboardView;