import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import daisyImage from './images/daisy.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));



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

// JSX element
const jsxElement = <h1>I am a JSX element</h1>

// JSX element for the header part of the website
const header = (
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
// JSX element, main

// Dynamic data
const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
    </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const user = (
    <div>
        <img src={daisyImage} alt='daisy - person'/>
        <h3>{author.firstName.toUpperCase()} {author.lastName.toUpperCase()}</h3>
        <p>{author.title}, {author.location}</p>
    </div>
)

const skills = ['HTML', 'CSS', 'SASS','JS' ,'React' ,'Redux', 'Node',
'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'MySQL', 'GraphQL',
'Gatsby', 'Docker', 'Heroku', 'Git']
const skillsFormatted = skills.map((skills) => <li key={skills}>{skills}</li>)
const userSkills =(
    <div className='skills-container'>
        <h3>SKILLS</h3>
        <ul>
            {skillsFormatted}
        </ul>

    </div>
)

const today = new Date()
const months = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October', 'November', 'December']

const userCard = (
    <div className='usercard-wrapper'>
        {user}
        {userSkills}
        <p>Joined on {today.getDate()} {months[today.getMonth()]} {today.getFullYear()}</p>
    </div>
)

// JSX element for the main part of the website
const main = (
    <main>
        <div className="main-wrapper">
            <p>Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>
                {techsFormatted}
            </ul>
            {result}
            {personAge}
            {userCard}
        </div>
    </main>
)

const copyRight = 'Copyright 2020'

// JSX element for the footer part of the website
const footer = (
    <footer>
        <div className="footer-wrapper">
            <p>{copyRight}</p>
        </div>
    </footer>
)

// JSX element which contain all, it is a container or parent
const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)

// We render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method
// takes two arguments
// ReactDOM.render(app, rootElement)
root.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
