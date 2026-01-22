import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);

    return (
        <div className="user-card">
            <h2> {name} </h2>
            <h2> Location: XYZ</h2>
            <h2> Contact: {count}</h2>
        </div>
    )
}

export default User;