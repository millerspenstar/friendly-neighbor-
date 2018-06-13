import React, { Component } from 'react'

export default class Job extends Component{



    render() {
        return (
            <article>
                <div>{this.props.taskName}</div>
                <div>{this.props.city}</div>
                <div>{this.props.zipcode}</div>
                <div>{this.props.adress}</div>
                <div>{this.props.email}</div>
                <div>{this.props.phone}</div>
            </article>
        )
    }
}