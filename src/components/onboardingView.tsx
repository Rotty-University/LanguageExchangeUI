import TextInput from "./library/textInput";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function OnboardingView() {
    return (
        <div className="content">
            <div>Logo</div>
            <div>
                <TextInput />
                <TextInput />
            </div>
            <div>
                <span>How well do you speak x language?</span>
                <div>meter 1-5</div>
            </div>
            <Link to="/dashboard/:userId">Continue</Link>
        </div>
    )
}

export default OnboardingView;