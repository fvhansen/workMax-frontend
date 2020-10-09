import React, { Component } from "react";
import './Counter.css';


class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }
    //en metode for å øke counter med 1 ved å klikke på increment
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    //en metode for å minke counter med 1 ved å klikke på decrement
    decrement = () => {
        if (this.state.counter === 0) {
            this.setState({
                counter: 0
            });
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    };

    
    render() {
        return (
            <div className="App.js">
                <p>Antall timer jobbet: {this.state.counter}</p> 
                <button onClick={this.decrement}> - </button>
                <button onClick={this.increment}> + </button>
            </div>
        );
    }
}

//<button> Lager en knapp på nettsiden med det navnet som man gir den </button>
//gjør at når button blir klikket på at man kjører increment metoden. 


export default Counter;