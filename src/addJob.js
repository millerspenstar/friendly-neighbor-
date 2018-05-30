import React, { Component } from 'react';

export default class AddJob extends Component {

    
    state = {
        job: {
            taskName: '',
            city: '',
            zipcode:'',
            adress:'',
            email:'',
            phone:''
        }
    }

    

    handleOnClick = () => {
        // this.props.AddJob({
        //     Task name: this.state.newTask name,
        //     city: this.state.newCity
        //     zipcode: this.state.newZipcode
        //     address: this.state.newAddress
        //     email: this.state.newEmail
        //     phone:this.state.newPhone
        // })
        fetch("http://localhost:3001/postjob",
   { method:"POST"}
    ).then((val)=>{
            console.log(val)
        })
        .catch((err)=>{console.log(err)})
    }







render() {
return (<section>
    <header><h1>Add a new Job</h1></header>
        <div>
            <div><label>Task name:</label><input type="text" onChange={(e)=>{
                this.setState({
                    taskName: e.target.value
                })
            }}/></div>
            <div><label>City:</label><input type="text" onChange={(e)=>{
                this.setState({
                    city: e.target.value
                })
            }}/></div>
            <div><label>Zipcode:</label><input type="text" onChange={(e)=>{
                this.setState({
                    zipcode: e.target.value
                })
            }}/></div>
            <div><label>Adress:</label><input type="text" onChange={(e)=>{
                this.setState({
                    address: e.target.value
                })
            }}/></div>
            <div><label>Email:</label><input type="text" onChange={(e)=>{
                this.setState({
                    email: e.target.value
                })
            }}/></div>
            <div><label>Phone Number;</label><input type="text" onChange={(e)=>{
                this.setState({
                    phone: e.target.value
                })
            }}/> </div>
            <div><button onClick={this.handleOnClick}>Submit</button></div>

        </div>
</section>
)
}
}