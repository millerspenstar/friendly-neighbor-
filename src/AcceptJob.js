import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

export default class AcceptJob extends Component {

    state = {
        name:'',
        email:'',
        phoneNumber:'',
    }
    constructor(props) {
        super(props)
        this.state = { job:this.props.location.state}
    }
  

    

    render(){
        console.log(this.state)
        return(
        <section>
        <div><label>Name:</label><input type="text" onChange={(e)=>{
            e.persist()
            this.setState((prev) => {
                return {
                    job: {
                        ...prev.job,
                        name: e.target.value
                    }
                }
            })
        }}/> </div>
        <div><label>Email:</label><input type="text" onChange={(e)=>{
            e.persist()
            this.setState((prev) =>{
                return {
                    email: {
                        ...prev.email,
                        email: e.target.value
                    }
                }
            })
        }}/></div>
        <div><label>Phone Number:</label><input type="text" onChange={(e)=>{
            e.persist()
            this.setState((prev) =>{
                return {
                    phoneNumber: {
                        ...prev.phoneNumber,
                        phoneNumber: e.target.value
                    }
                }
            })
        }}/></div>
        <div><button onClick={this.handleOnClick}>Submit</button></div>
        </section>)
    }


}