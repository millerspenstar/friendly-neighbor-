import React, { Component } from 'react';
import {BrowserRouter as router} from 'react-router-dom'

export default class AcceptJob extends Component {

    state = {
        name:'',
        email:'',
        phoneNumber:'',
    }

    render(){
        return(
        <section>
        <div><label>Name:</label><input type="text" onChange={(e)=>{
            this.setState({
                name: e.target.value
            })
        }}/> </div>
        <div><label>Email:</label><input type="text" onChange={(e)=>{
            this.setState({
                email: e.target.value
            })
        }}/></div>
        <div><label>Phone Number:</label><input type="text" onChange={(e)=>{
            this.setState({
                phoneNumber: e.target.value
            })
        }}/></div>
        <div><button onClick={this.handleOnClick}>Submit</button></div>
        </section>)
    }


}