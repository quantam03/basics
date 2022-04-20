import React, { Component } from 'react'

class Data extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}
    }
    render(){
        return (<>
            <h1>Employee Data</h1>
            <div >
                {this.props.data.map( (elmnt) => {
                    console.log(elmnt);
                    return (
                        <div >
                            <h2> Name: {elmnt.name} <br/> Age: {elmnt.age} <br/> Salary: {elmnt.salary} </h2>
                        </div>
                    );
                    })
                }
            </div>
            <button onClick={this.props.mouseFunc}>Go back</button>
        </>
    )
    }
}


export default Data