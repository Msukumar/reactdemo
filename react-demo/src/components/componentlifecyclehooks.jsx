import React, { Component } from 'react';
import lifecycle from '../assets/lifecycle.png';
class ComponentLifeCycle extends Component {
    state = {  }

    constructor(){
        super();
        console.log("component Constructor is called");
    }

    componentWillMount(){
        console.log("componentWillMount is called");
    }

    componentDidCatch(){
        console.log("componentDidCatch is called");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is called");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is called");
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps is called");
    }
    componentDidMount(){
        console.log("componentDidMount is called");
    }
    componentWillUpdate(){
        console.log("componentWillUpdate is called");
    }
    render() { 
        console.log("render method is called");
        return ( <img src={lifecycle} alt="life cycle"/> );
    }
}
 
export default ComponentLifeCycle;