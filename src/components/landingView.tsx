import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function LandingView() {
    return (
        <div className="content">
            <div className="navigation-container">
                <img src={""} alt={"logo"} />
                <Link to="/login">
                    Login
                </Link>
            </div>
            <div className="body-container">
                <div>
                    <h1>Start connecting with others today!</h1>
                    <button>Start a call</button>
                </div>
                <div>
                    Illustration
                </div>
            </div>
        </div>
    )
}

export default LandingView;