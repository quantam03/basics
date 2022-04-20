import React,{Component} from 'react'
import Data from './Data';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         clicked:false, 
         name:'',
         age:'',
         salary:'',
         
         array:[]
      };
    }
    changeEvent=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    mouseClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }

    FormSubmit=(event)=>{
        event.preventDefault();
        console.log("worked");
        let temp_obj = {
            name:this.state.name,
            age:this.state.age,
            salary:this.state.salary
        };
        this.state.array.push(temp_obj);

        this.setState({
            clicked:true, 
            name:'',
            age:'',
            salary:'',
            
        })

    }
    render(){
        return(
            <div>
                {!this.state.clicked ?
                <>
                 <form>
                    <label htmlFor='name'>Name</label>
                    <input type={'text'} 
                    id='name'
                    name='name'
                    value={this.state.value}
                    onChange={this.changeEvent}/>
                    <br/>

                    <label htmlFor='age'>Age</label>
                    <input type={'number'} 
                    id='age'
                    name='age'
                    value={this.state.value}
                    onChange={this.changeEvent}/>
                    <br/>

                    <label htmlFor='salary'>Salary</label>
                    <input type={'number'} 
                    id='salary'
                    name='salary'
                    value={this.state.value}
                    onChange={this.changeEvent}/>
                    <br/>
                    <button className="submit-btn" type="submit" onClick={this.FormSubmit.bind(this)}>Submit</button>  

                </form>
                </>:
                <Data data={this.state.array} mouseFunc={this.mouseClick}/>
               
    }
            </div>
        )
    }
}
 export default Form