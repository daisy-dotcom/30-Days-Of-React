import React from "react";
import Welcome from "./WelcomeMessage";
import Login from "./LoginMessage";
import Message from "./Message";
import Button from "./Button";
import Tech from "./Tech";
import buttonStyles from "../styles/ButtonStyles";

class Main extends React.Component {
    render() {
        const {
            techs,
            greetPeople,
            handleTime,
            loggedIn,
            handleLogin,
            message,
            seasonalColour,
            diurnalColour
        } = this.props
        console.log(message)

        const status = loggedIn ? <Welcome /> : <Login />
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>

                    <Tech techs={this.props.techs} />

                    {techs.length === 3 && (
                        <p>You have all the prerequisite courses to get started React</p>
                    )}
                    <div>
                        <Button
                            text='Show Time'
                            onClick={handleTime}
                            style={buttonStyles}
                        />
                        {' '}
                        <Button
                            text='Greet People'
                            onClick={greetPeople}
                            style={buttonStyles}
                        />
                        {' '}
                        <Button
                            text='Seasonal Background'
                            onClick={seasonalColour}
                            style={buttonStyles}
                        />
                        {' '}
                        <Button
                            text='Diurnal Background'
                            onClick={diurnalColour}
                            style={buttonStyles}
                        />

                        {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
                    </div>
                    <div style={{ margin: 10 }}>
                        <Button
                            text={loggedIn ? 'Logout' : 'Login'}
                            style={buttonStyles}
                            onClick={handleLogin}
                        />
                        <br />
                        {status}
                    </div>
                    <Message message={message} />
                </div>
            </main>
        )
    }
}

export default Main;