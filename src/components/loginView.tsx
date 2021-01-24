import {
    Link
} from "react-router-dom";
import Logo from "./library/logo";
import TextInput from "./library/textInput";

function LoginView() {
    return (
        <div>
            <div className="content-center">
                <div className="login-info-container">
                    <Logo />
                    <div className="header-container">
                        <h2>Welcome back!</h2>
                    </div>
                    <TextInput label="username"/>
                    <TextInput type="password" label="password"/>
                    <div className="login-button">
                        <button className="button-primary">Sign In</button>
                    </div>
                    <div className="signup-link">
                        <span>New here?</span>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LoginView;