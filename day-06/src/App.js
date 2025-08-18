import './App.css';
import {tenHighestPopulation} from './data/ten_most_highest_populations.js';
import React from 'react';

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
      <div>
        <h1>{name}</h1>
        <small>{city}</small>
      </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
      <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

const Title = () => {
    return (
        <div>
            <h1>30 Days of React</h1>
            <p>Number Generator</p>
        </div>

    )
}


const checkIfPrime = (tileNum) => {
    let start = 2
    let stop = Math.floor(Math.sqrt(tileNum))
    /*console.log(`Stop: ${stop}`)*/

    let isPrime = true

    for (let i= start; i <= stop; i++){
        if (tileNum % i === 0){
            isPrime = false
        }
    }

    return isPrime
}

const tileColour = (tileNum) => {
    let col = 'green'
    if (tileNum % 2 !== 0){
        col = 'yellow'
    }

    let isPrime = checkIfPrime(tileNum)

    if (tileNum > 1 && isPrime){
        col = 'red'
    }

    return col

}
const Board = ({nums}) => {
    const numsFormatted = nums.map((num) => <li style={{background: tileColour(num)}} key={num}>{num}</li>)

    return (
        <div>
            <ul>
                {numsFormatted}
            </ul>
        </div>

    )
}

const BarTitle = () => {
    return (
        <div className='world-pop-title'>
            <h3>30 Days of React</h3>
            <p>World Population</p>
        </div>
    )
}

const Bar = ({name, pop}) => {
    /*barWidth(pop)*/
    const gotWidth = barWidth(pop)
    return(
        <tr>
            <td className='country'>{name}</td>
            <td> <span className='bar' style={{width: `${gotWidth}%`}}></span> </td>
            <td className='population'>{pop}</td>
        </tr>
    )

}

const barWidth = (pop) => {
    const popArr = tenHighestPopulation.map(({country, population}) => population)
    const maxPop = popArr.reduce((a, b) => Math.max(a, b), -Infinity)
    console.log(`Bar width: ${(pop/maxPop) * 100} %`)
    return `${(pop/maxPop) * 100}`
}

const WorldPop = () => {

    const barList = tenHighestPopulation.map(({country, population}) => (
        <Bar key={country} name={country} pop={population} />
    ))

    return (
        <table className='world-pop'>
            <thead>
            <tr>
                <th style={{width: '25%'}}></th>
                <th style={{width: '55%'}}></th>
                <th style={{width: '20%'}}></th>
            </tr>
            </thead>
            <tbody>
                {barList}
            </tbody>
        </table>
    )
}
const Main = () => {
    const nums = Array.from(Array(31).keys()).map(x => ++x)
    return(
        <div>
            <Title/>
            <Board nums={nums}/>

            <BarTitle />
            <WorldPop/>
        </div>
    )
}
const App = () => (

    <div className='container'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>
        <Main />
    </div>
)
/*<Main />*/

export default App;
