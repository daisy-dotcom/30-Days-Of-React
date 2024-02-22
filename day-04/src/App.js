//import logo from './logo.svg';
import './App.css';
import daisyImage from './images/daisy.jpg';

// Dynamic data
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Daisy',
  lastName: 'Oira',
  title: 'Senior Developer',
  location: 'Australia'
}
const date = 'Oct 1, 2020'

// React component for the header part of the website
const Header = () => (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {author.firstName} {author.lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
)

const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  return techs.map((tech) => <li key={tech}>{tech}</li>)
}

const User = () => (
    <div className='user-wrapper'>
      <img src={daisyImage} alt='daisy - person'/>
      <h3>{author.firstName.toUpperCase()} {author.lastName.toUpperCase()}</h3>
    </div>
)


// Hexadecimal color generator
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const HexaGen = () => {
    let colours = []
    for(let i= 0; i < 5; i++){
        colours.push(hexaColor())
    }
    return colours.map( (colour) =>
        <li className='row-colours' key={colour} style={{background:colour}}>{colour}</li> )
}

// React component for the main part of the website
const Main = () => (
    <main>
        <div className="main-wrapper">
            <p>Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>
                <TechList />
            </ul>
            <User />
            <ul className='colours-wrapper'>
                <HexaGen />
            </ul>


        </div>
    </main>
)

// React component element for the footer part of the website
const Footer = () => (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright 2020</p>
      </div>
    </footer>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
