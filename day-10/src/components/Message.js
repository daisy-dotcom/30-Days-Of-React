import React from "react";
class Message extends React.Component{

    render() {
        const {message} = this.props
        return(
            <div>
                <h1>{message}</h1>
            </div>
        )
    }
}

export default Message;