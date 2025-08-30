import './App.css';
import React from 'react'


// class based component
class Header extends React.Component {
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
        <header style={this.props.backgroundStyles}>
          <div className='header-wrapper'>
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

const Message = ({ message }) => (
    <div>
      <h1>{message}</h1>
    </div>
)
const Login = () => (
    <div>
      <h3>Please Login</h3>
    </div>
)
const Welcome = (props) => (
    <div>
      <h1>Welcome to 30 Days Of React</h1>
    </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
)

// TechList Component
// class base component
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
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
            <ul>
              <TechList techs={this.props.techs} />
            </ul>
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

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// Footer Component
// Class component
class Footer extends React.Component {

  render() {
    return (
        <footer style={this.props.backgroundStyles}>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click Show Time or Greet People to change me',
    styles: {
      backgroundColor: '#61dbfb',
      color: 'white',
    },
  }

  seasonalColour = () => {
    const seasons = {
      0: "#FFDE59",
      1: "#FE9900",
      2: "#FE9900",
      3: "#FE9900",
      4: "#6B8587",
      5: "#6B8587",
      6: "#6B8587",
      7: "#7DDA58",
      8: "#7DDA58",
      9: "#7DDA58",
      10: "#FFDE59",
      11: "#FFDE59"
    }
    let month = new Date().getMonth()
    this.changeBackground(seasons[month])
  }

  diurnalColour = () => {
    let hour = new Date("August 17, 1995 21:24:00").getHours()
    let quarter = Math.floor(hour/6)

    const hourlyColours = {
      0: '#000000',
      1: '#A341F9',
      2: '#D4F941',
      3: '#8D6F64',
    }
    setTimeout(this.changeBackground(hourlyColours[quarter]), 2000)

  }

  changeBackground = (backgroundColour) => {

    this.setState({
          styles: {
            backgroundColor: backgroundColour,
            color: 'white'
          }
        }
    )
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
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
    return `${month} ${date}, ${year}`
  }
  handleTime = () => {
    let message = this.showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020'
    this.setState({ message })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    return (
        <div className='app'>
          <Header data={data} backgroundStyles={this.state.styles}/>

          <Main
              techs={this.state.techs}
              handleTime={this.handleTime}
              greetPeople={this.greetPeople}
              loggedIn={this.state.loggedIn}
              handleLogin={this.handleLogin}
              message={this.state.message}
              seasonalColour={this.seasonalColour}
              diurnalColour={this.diurnalColour}
          />

          <Footer date={new Date()} backgroundStyles={this.state.styles}/>
        </div>
    )
  }
}
export default App;
