import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrStudent = [
        { code: 1, name: 'Pham Luong Quan' },
        { code: 2, name: 'Pham Hoang Gia' },
        { code: 3, name: 'Pham Nguyen Uyen Thy' },
    ]

    renderStudent = () => {
        // const arrJSX = [];

        // for (let index = 0; index < this.arrStudent.length; index++) {
        //     let tagP = <p key={index} >this.arrStudent[index].name</p>;
        //     arrJSX.push(tagP);
        // }
        // console.log(arrJSX);
        // return arrJSX;
        return this.arrStudent.map((student, index) => {
            return <li key = {index}>{student.name}</li>;
        });
    }

    render() {
        return (
            <div>
                <ul className="container">
                    {this.renderStudent()}
                </ul>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.arrStudent.map((student, index) => {
                            return <tr key = {index}>
                                <td>{student.code}</td>
                                <td>{student.name}</td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
