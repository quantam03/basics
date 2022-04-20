import React, { Component } from "react";
import Class from "./components/Class";
import Functional from "./components/Functional";

class App extends Component{
    constructor(){
        super();
        this.state = {
            showclass: false,
            showfunction : false
        }
    }

    render(){
        console.log(this);
        return (
        <div>
             <h1 className='heading'>Styling Using Functional and Class Component</h1>

            <div >
                <button className="btn" onClick = {() => this.setState({showfunction :  !this.state.showfunction}) }>To see functional component</button>
                <br/>
                
                <button className="btn" onClick = {() => this.setState({showclass : !this.state.showclass})}>To see class component</button>
            </div>
            <div >
            {this.state.showfunction ? <Functional/> : null}
            {this.state.showclass ? <Class/> : null}
            </div>
        </div>
        )
}
}
export default App

