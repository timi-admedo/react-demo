import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    // constructor is used to initialize the state or pass props (or methods in the props object) to children
    // also to initialize 3rd party libs/functions
    //
    // constructor() {
    //     super();
    //     this.handleInc = this.handleInc.bind(this);
    // }

    handleInc() {
        console.log(this);
        // this.state.count++;
        this.setState({ count: this.state.count +1})
    }

    // handleInc = object => {
    //     this.setState({ count: this.state.count +1})
    //     console.log(object);
    // }

    render() {
        return (
            <div>
            <button onClick={this.handleInc}> Increment </button>
            {/* <button onClick={() => this.handleInc({id: 1})}> Increment </button> */}

            <div>{this.state.count}</div>
            </div>
        )
    }
}

export default Counter;