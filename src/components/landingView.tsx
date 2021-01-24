import {
    Link
} from "react-router-dom";
import Logo from "./library/logo";

function LandingView() {
    return (
        <div className="content">
            <div className="navigation-container">
                <Logo />
                <div className="nav-item-button-container">
                    <Link className="nav-item-link" to="/login">
                        Login
                    </Link>
                    <Link className="nav-item-link" to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
            <div className="body-container">
                <div className="tagline-container">
                    <h1>Start connecting with others today!</h1>
                    <button className="button-primary">Start a call</button>
                </div>
                <div>
                    Illustration
                </div>
            </div>
            <div className="image-grid">
                <div className="grid-item">
                    Item 1
                </div>
                <div className="grid-item">
                    Item 2
                </div>
                <div className="grid-item">
                    Item 3
                </div>
            </div>
            <div className="footer">
                Footer content
            </div>
        </div>
    )
}

export default LandingView;