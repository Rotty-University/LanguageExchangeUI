import { ReactNode } from "react";
import {
    generatePath,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import Logo from "./library/logo";
import RightLogo from "./library/rightLogo";

const languagesMap = {
    0: "English",
    1: "Vietnamese",
    2: "French",
    3: "Mandarin Chinese",
    4: "Spanish",
    5: "Portuguese",
    6: "Tagalog",
    7: "Russian",
}

const reasonsMap = {
    0: "Cultural",
    1: "School",
    2: "For Fun",
    3: "Work",
    4: "Family & Friends"
}

function renderTags(map:any):ReactNode {
    let result:ReactNode[] = [];
    Object.keys(map).forEach(key => {
        let current = (
            <div className="tag">
                {map[key]}
            </div>
        )
        result.push(current);
    })
    return result
}

function OnboardingView(props:any) {

    return (
        <div className="content-center">
            <div className="onboarding-container">
                <Logo />
                <Switch>
                    <Route path={generatePath("/getstarted/:userid/native", {
                        userid: props.match.params.userId
                    })}>
                        <h2 className="onboarding-header">My native language is...</h2>
                        <div className="onboarding-tags-container">
                            {renderTags(languagesMap)}
                        </div>
                        <Link to={generatePath("/getstarted/:userid/learn", {
                        userid: props.match.params.userId
                        })}>
                            <RightLogo />
                        </Link>
                    </Route>
                    <Route path={generatePath("/getstarted/:userid/learn", {
                        userid: props.match.params.userId
                    })}>
                        <h2 className="onboarding-header">I want to learn...</h2>
                        <div className="onboarding-tags-container">
                            {renderTags(languagesMap)}
                        </div>
                        <Link to={generatePath("/getstarted/:userid/why", {
                        userid: props.match.params.userId
                        })}>
                            <RightLogo />
                        </Link>
                    </Route>
                    <Route path={generatePath("/getstarted/:userid/why", {
                        userid: props.match.params.userId
                    })}>
                        <h2 className="onboarding-header">Why are you learning a language?</h2>
                        <div className="onboarding-tags-container">
                            {renderTags(reasonsMap)}
                        </div>
                        <Link to={generatePath("/getstarted/:userid/level", {
                        userid: props.match.params.userId
                        })}>
                            <RightLogo />
                        </Link>
                    </Route>
                    <Route path={generatePath("/getstarted/:userid/level", {
                        userid: props.match.params.userId
                    })}>
                        <h2 className="onboarding-header">How well do you currently speak NATIVE?</h2>
                        <div className="radio-button-container">
                            <div className="bookend-text">
                                <span className="bold">Beginner</span>
                                <span>I can understand basic vocabulary</span>
                            </div>
                            <label className="container">
                                <div className="checkmark"></div>
                                <input type="radio" name="radio"/>
                                1
                            </label>
                            <label className="container">
                                <div className="checkmark"></div>
                                <input type="radio" name="radio"/>
                                2
                            </label>
                            <label className="container">
                                <div className="checkmark"></div>
                                <input type="radio" name="radio"/>
                                3
                            </label>
                            <label className="container">
                                <div className="checkmark"></div>
                                <input type="radio" name="radio"/>
                                4
                            </label>
                            <label className="container">
                                <div className="checkmark"></div>
                                <input type="radio" name="radio"/>
                                5
                            </label>
                            <div className="bookend-text">
                                <span className="bold">Proficient</span>
                                <span>I can hold a conversation with a native speaker</span>
                            </div>
                        </div>
                        <Link to={generatePath("/dasboard/:userid", {
                        userid: props.match.params.userId
                        })}>
                            <RightLogo />
                        </Link>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default withRouter(OnboardingView);