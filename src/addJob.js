import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class AddJob extends Component {


    state = {
        job: {
            taskName: '',
            city: '',
            zipcode: '',
            address: '',
            email: '',
            phone: ''
        }
    }



    handleOnClick = () => {
        const postjob = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }


        fetch("http://localhost:3001/postjob", postjob
        ).then((val) => {
            console.log(val)
        })
            .catch((err) => { console.log(err) })
    }







    render() {
        console.log(this.state)
        return (<section>
            <Link to="/Available"> Available Jobs</Link>
            <header><h1>Add a new Job</h1></header>
            <div>
                <div><label>Task name:</label><input type="text" onChange={(e) => {
                    this.setState({
                        taskName: e.target.value
                    })
                }} /></div>
                <div><label>City:</label><input type="text" onChange={(e) => {
                    this.setState({
                        city: e.target.value
                    })
                }} /></div>
                <div><label>Zipcode:</label><input type="text" onChange={(e) => {
                    this.setState({
                        zipcode: e.target.value
                    })
                }} /></div>
                <div><label>Adress:</label><input type="text" onChange={(e) => {
                    this.setState({
                        address: e.target.value
                    })
                }} /></div>
                <div><label>Email:</label><input type="text" onChange={(e) => {
                    this.setState({
                        email: e.target.value
                    })
                }} /></div>
                <div><label>Phone Number;</label><input type="text" onChange={(e) => {
                    this.setState({
                        phone: e.target.value
                    })
                }} /> </div>
                <div><button onClick={this.handleOnClick}>Submit</button></div>

            </div>
        </section>
        )
    }
}