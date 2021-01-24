import {
    Link
} from "react-router-dom";
import TextInput from "./library/textInput";

function LoginView() {
    return (
        <div>
            <div className="content">
                <div>Logo</div>
                <div className="login-info-container">
                    <h2>Welcome Back!</h2>
                    <TextInput />
                    <TextInput />
                    <button>Sign In</button>
                </div>
                <div>
                    <span>New here?</span>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginView;