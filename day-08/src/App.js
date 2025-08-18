import React from "react";
import './App.css';
import daisyImage from './images/daisy.jpg'
import { countriesData } from './data/countries.js'

// function to show month date year
const showDate = (time) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
    <div className='user-card'>
        <img src={image} alt={firstName} />
        <h2>
            {firstName} {lastName}
        </h2>
    </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
        {text}
    </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
}

// class based component
class Header extends React.Component {

    render() {
        const {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date,
        } = this.props.data

        return (
            <header>
                <div className='header-wrapper' style={this.props.styles}>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <small>{date}</small>
                </div>
            </header>
        )
    }
}

const Count = ({ count, addOne, minusOne }) => (
    <div>
        <h1>{count} </h1>
        <div>
            <Button text='+1' onClick={addOne} style={buttonStyles} />
            <Button text='-1' onClick={minusOne} style={buttonStyles} />
        </div>
    </div>
)

// TechList Component
// class base component
class TechList extends React.Component {

    render() {
        const { techs } = this.props
        return techs.map((tech) => <li key={tech}>{tech}</li>)
    }
}

// Main Component
// Class Component
class Main extends React.Component {

    render() {
        const {
            techs,
            user,
            greetPeople,
            handleTime,
            changeBackground,
            count,
            addOne,
            minusOne,
            country,
            changeCountry
        } = this.props
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={techs} />
                    </ul>
                    <UserCard user={user} />
                    <Button
                        text='Greet People'
                        onClick={greetPeople}
                        style={buttonStyles}
                    />
                    <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
                    <Button
                        text='Change Background'
                        onClick={changeBackground}
                        style={buttonStyles}
                    />
                    <Count count={count} addOne={addOne} minusOne={minusOne} />
                    <CountrySelector country={country} changeCountry={changeCountry}/>
                </div>
            </main>
        )
    }
}

// Footer Component
// Class component
class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className='footer-wrapper' style={this.props.styles}>
                    <p>Copyright {this.props.date.getFullYear()}</p>
                </div>
            </footer>
        )
    }
}

class CountrySelector extends React.Component {
    render() {
        let {
            country,
            changeCountry} = this.props
        return(
            <div>
                <div className='flag-wrapper'>
                    <img className='country-flag' src={country.flag} alt={country.name}/>
                    <h3> {country.name} </h3>
                </div>
                <p> <b>Capital:</b> {country.capital}</p>
                <p> <b>Language:</b> {country.languages[0].name}</p>
                <p> <b>Population:</b> {country.population}</p>
                <p> <b>Currency:</b> {country.currencies[0].name}</p>

                <button onClick={changeCountry} style={buttonStyles}> Change Country </button>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        count: 0,
        styles: {
            backgroundColor: '#61dbfb',
            color: 'black',
        },
        country: countriesData[0]
    }
    showDate = (time) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        const month = months[time.getMonth()].slice(0, 3)
        const year = time.getFullYear()
        const date = time.getDate()
        return ` ${month} ${date}, ${year}`
    }
    addOne = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // method which subtract one to the state
    minusOne = () => {
        this.setState({ count: this.state.count - 1 })
    }
    handleTime = () => {
        alert(this.showDate(new Date()))
    }
    greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge, 2025')
    }
    changeBackground = () => {

        const background = this.state.styles.backgroundColor === '#61dbfb' ? '#060270' : '#61dbfb'
        const color = this.state.styles.color === 'black' ? 'white' : 'black'

        this.setState({
                styles: {
                    backgroundColor: background,
                    color: color
                }
            }
        )
    }

    changeCountry = () => {
        let countryIndex = Math.floor(Math.random() * countriesData.length)
        this.setState({
            country: countriesData[countryIndex]
        })
    }
    render() {
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Daisy',
                lastName: 'Oira',
            },
            date: 'Aug 13, 2025',
        }
        const techs = ['HTML', 'CSS', 'JavaScript']
        const date = new Date()
        // copying the author from data object to user variable using spread operator
        const user = { ...data.author, image: daisyImage }

        return (
            <div className='app' >
                <Header data={data} styles={this.state.styles}/>
                <Main
                    user={user}
                    techs={techs}
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    changeBackground={this.changeBackground}
                    addOne={this.addOne}
                    minusOne={this.minusOne}
                    count={this.state.count}
                    country={this.state.country}
                    changeCountry={this.changeCountry}
                />
                <Footer date={date} styles={this.state.styles}/>
            </div>
        )
    }
}

export default App;




