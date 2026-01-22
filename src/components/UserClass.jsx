import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Name",
        location: "Location",
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SantoshTalloju");
    const json = await data.json();
    console.log('profile data:', json);
    this.setState({
        userInfo: json
    });
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div className="user-card">
        <h2> Name: {userInfo.login} </h2>
        <h2> Location: {userInfo.location ?? 'Hyderabad'}</h2>
        <h2> Contact: XYX</h2>
      </div>
    );
  }
}

export default UserClass;
