import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Job from './Job'


export default class Available extends Component {
    state = {
        jobsdata: []
    }
   

    getJobs = async () => {
        const response = await fetch('http://localhost:3001/jobs')
        const value = await response.json()
        this.setState({
            jobsdata: value
        })
    }

    renderJobs = () => {
        return this.state.jobsdata.map((job, i) => {
            return (
                <div><Job key={i} taskName={job.taskName} city={job.city} zipcode={job.zipcode} address={job.address} email={job.email} phone={job.phone}/>
                <button onClick={()=>{
                    console.log("AvailableJobsClick", this.props.history)
                     this.props.history.push("AcceptJob",job)
                } }>Accept</button>
                </div>)

        })
    }
    componentDidMount= () => {
        this.getJobs()
    }
   

    render() {
        console.log(this.state)
        return (
            <section>
                <Link to="/"> Add a Job </Link>
                <div>
                    <h1>Available Jobs</h1>
                    {this.renderJobs()}
                    
                </div>
            </section>)
    }}