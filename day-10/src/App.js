import React from 'react';
import './styles/App.css';
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Main from "./components/Main";


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