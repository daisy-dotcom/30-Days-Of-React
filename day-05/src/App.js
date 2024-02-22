import logo from './logo.svg';
import './App.css';
import daisyImage from './images/daisy.jpg';

/* Dynamic data
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
*/

// React component for the header part of the website
const Header = ({data}) => {
    const {welcome, title, subtitle, author, date} = data
    return (
        <header>
            <div className="header-wrapper">
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    Instructor: {author.firstName} {author.lastName}
                </p>
                <small>Date: {date.toDateString()}</small>
            </div>
        </header>
    )
}

const TechList = ({techs}) => {
    return techs.map((tech) => <li key={tech}>{tech}</li>)
}

const User = ({user}) => (
    <div className='user-wrapper'>
        <img src={user.image} alt='daisy - person'/>
        <h3>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h3>
    </div>
)

const HexaGen = ({hexaColour}) => {
  let colours = []
  for(let i= 0; i < 5; i++){
    colours.push(hexaColour())
  }
  return colours.map( (colour) =>
      <li className='row-colours' key={colour} style={{background:colour}}>{colour}</li> )
}

const Button = ({text, onClick, style}) => {
    return <button style={style} onClick={onClick}>{text}</button>
}

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
// React component for the main part of the website
const Main = ({user, techs, handleTime, greetPeople, hexaColour}) => {
    return (
        <main>
            <div className="main-wrapper">
                <p>Prerequisite to get started{' '}
                    <strong>
                        <em>react.js</em>
                    </strong>
                    :
                </p>
                <ul>
                    <TechList techs={techs}/>
                </ul>
                <User user={user}/>
                <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
                <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
                <ul className='colours-wrapper'>
                    <HexaGen hexaColour={hexaColour}/>
                </ul>
            </div>
        </main>
    )
}

// React component element for the footer part of the website
const Footer = ({date}) => (
    <footer>
        <div className="footer-wrapper">
            <p>Copyright {date.getFullYear()}</p>
        </div>
    </footer>
)

function App() {
    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
            firstName: 'Daisy',
            lastName: 'Oira',
            title: 'Senior Developer',
            location: 'Australia'
        },
        date : new Date()
    }

    const date = new Date()

    const user = {
        firstName: data.author.firstName,
        lastName: data.author.lastName,
        image: daisyImage
    }

    const techs = ['HTML', 'CSS', 'JavaScript']
    const handleTime = () => {
        alert(new Date().toDateString())
    }

    const greetPeople = () => {
        alert('Hello World!')
    }

    // Hexadecimal color generator
    const hexaColour = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color
    }

    return (
        <div className="App">
            <Header data={data}/>
            <Main
                user={user}
                techs={techs}
                handleTime={handleTime}
                greetPeople={greetPeople}
                hexaColour={hexaColour}
            />
            <Footer date={date}/>
        </div>
    );
}

export default App;
