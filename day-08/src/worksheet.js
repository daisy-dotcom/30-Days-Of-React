import React from "react";
import './App.css';

class App extends React.Component {
    // declaring state
    state = {
        count: 0,
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg'
    }

    changeAnimal = () => {
        let dogURL =
            'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        let catURL =
            'https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg'
        let image = this.state.img === catURL ? dogURL : catURL

        this.setState({ img: image })
    }
    addOne = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // method which subtract one to the state
    minusOne = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        // accessing the state value
        const count = this.state.count
        return (
            <div className='App'>
                <h1>Day 8 of React: States</h1>
                <h1>{count}</h1>
                <button onClick={this.addOne}>
                    +1
                </button>

                <button
                    onClick={this.minusOne}
                >
                    -1
                </button>

                <div className='animal-wrapper'>
                    <div className='animal'>
                        <img src={this.state.img} alt='animal'/>
                    </div>

                    <button onClick={this.changeAnimal} className='btn btn-add'>
                        Change
                    </button>
                </div>

            </div>
        )
    }
}

export default App;




