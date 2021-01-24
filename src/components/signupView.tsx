import TextInput from "./library/textInput";

import {
    Link
} from "react-router-dom";
import Logo from "./library/logo";

function SignupView() {
    return (
        <div>
            <div className="content-center">
                <div className="login-info-container">
                    <Logo />
                    <div className="header-container">
                        <h2>Create an account</h2>
                        <span>welcome to convo!</span>
                    </div>
                    <TextInput label="Name"/>
                    <TextInput label="username"/>
                    <TextInput type="password" label="password"/>
                    <div className="login-button">
                        <button className="button-primary">Sign Up</button>
                    </div>
                    <div className="signup-link">
                        <span>Have an account?</span>
                        <Link to="/login">Sign in</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SignupView;