import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <div className="flex">
                    LoggedIn user: 
                    <UserContext.Consumer>
                        {(data) => (
                            <span>
                                {data.loggedInUser}
                            </span>
                        )}
                    </UserContext.Consumer>
                </div>
                {/* <User name={"Name from functional component"}/> */}
                <UserClass name={"Name from class component"}/>
            </div>
        )
    }
}

export default About;