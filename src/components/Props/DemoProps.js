import React, { Component } from 'react'
import {StudentInfo} from './StudentInfo'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3>Student Information</h3>
                <div className="row">
                    <div className="col-4">
                        <StudentInfo />
                    </div>
                    <div className="col-4">
                        <StudentInfo />
                    </div>
                    <div className="col-4">
                        <StudentInfo />
                    </div>
                </div>
                
            </div>
        )
    }
}
