import './Table.css';
import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: [{Header: 'ID',
                       accessor: 'id'
                    }, {
                       Header: 'Date',
                       accessor: 'date'
                    }, {
                        Header: 'User Name',
                        accessor: 'name'
                     }, {
                        Header: 'Email',
                        accessor: 'email'
                     }, {
                        Header: 'Feedback',
                        accessor: 'feedback'
                     }, {
                        Header: 'Image1',
                        accessor: 'image1'
                     }, {
                        Header: 'Image2',
                        accessor: 'image2'
                     }, {
                        Header: 'Image3',
                        accessor: 'image3'
                     }, {
                        Header: 'Admin Notes',
                        accessor: 'adminnotes'
                     }, {
                        Header: 'Reviewed',
                        accessor: 'reviewed'
                     }]
        }
    }

    componentDidMount() {
        console.log("attempting to get data");
        fetch('/retrieve')
        .then(res=>{res.json()})
        .then(data=>{this.setState({data: data})})
    }
    
    addRecords() {
        /*Query the DB and put the data in SQL format*/
        var tableData;

        
        return tableData;
    }

    render() {
        return(
            <ReactTable
                data={this.state.data}
                columns={this.state.columns}
            />
        );
    }
}