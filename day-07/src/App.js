import logo from './logo.svg';
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
class Country extends React.Component {

  render()
  {
    const {name, city} = this.props
    return (
        <div>
          <h1>{name}</h1>
          <small>{city}</small>
        </div>
    )
  }
}

// countries component
class Countries extends React.Component{

  render()
  {
    const {countries} = this.props
    const countryList = countries.map((country) => (
        <Country key={country.name} country={country}/>
    ))

    return <div>{countryList}</div>
  }
}

class Title extends React.Component {
  render(){
    return (
        <div>
          <h1>30 Days of React</h1>
          <p>Number Generator</p>
        </div>

    )
  }
}


class Board extends React.Component {

  render()
  {
    const {nums} = this.props
    const numsFormatted = nums.map((num) => <li style={{background: this.tileColour(num)}} key={num}>{num}</li>)

    return (
        <div>
          <ul>
            {numsFormatted}
          </ul>
        </div>

    )
  }

  tileColour(tileNum){
    let col = 'green'
    if (tileNum % 2 !== 0){
      col = 'yellow'
    }

    let isPrime = this.checkIfPrime(tileNum)

    if (tileNum > 1 && isPrime){
      col = 'red'
    }

    return col
  }

  checkIfPrime(tileNum) {
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

}

class BarTitle extends React.Component {
  render() {
    return (
        <div className='world-pop-title'>
          <h3>30 Days of React</h3>
          <p>World Population</p>
        </div>
    )
  }
}

class Bar extends React.Component{
  constructor(props){
    super(props)
  }
  render()
  {
    const {name, pop} = this.props
    /*barWidth(pop)*/
    const gotWidth = this.barWidth(pop)
    return (
        <tr>
          <td className='country'>{name}</td>
          <td><span className='bar' style={{width: `${gotWidth}%`}}></span></td>
          <td className='population'>{pop}</td>
        </tr>
    )
  }

  barWidth(pop){
    let popArr = tenHighestPopulation.map(({country, population}) => population)
    let maxPop = popArr.reduce((a, b) => Math.max(a, b), -Infinity)
    return `${(pop/maxPop) * 100}`

  }


}


class WorldPop extends React.Component {
  render() {
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


}
class Main extends React.Component{
  render() {
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

}
class App extends React.Component {
  render(){
    return(
      <div className='container'>
        <div>
          <h1>Countries List</h1>
          <Countries countries={countries} />
        </div>
        <Main />
      </div>
    )
  }
}

export default App;
