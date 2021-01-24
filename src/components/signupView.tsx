import TextInput from "./library/textInput";

import {
    Link
} from "react-router-dom";

function SignupView() {
    return (
        <div>
            <div className="content">
                <div>Logo</div>
                <div className="login-info-container">
                    <h2>Create an account</h2>
                    <span>Welcome to convo!</span>
                    <TextInput />
                    <TextInput />
                    <TextInput />
                    <button>Sign Up</button>
                </div>
                <div>
                    <span>Have an account?</span>
                    <Link to="/login">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupView;