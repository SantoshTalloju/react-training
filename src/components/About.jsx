import User from "./User";
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                {/* <User name={"Name from functional component"}/> */}
                <UserClass name={"Name from class component"}/>
            </div>
        )
    }
}

export default About;