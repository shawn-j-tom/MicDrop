import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Feedback.css";

export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        feedback: '',
        image1: '',
        image2: '',
        image3: ''
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.feedback.length > 0;
  }

  validateEmail() {
            /* regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript*/
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this.state.email);
    }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    /* log user into system and redirect them to table view page */
    /*connect and send to db*/
    const data = this.state;
       /* var mysql = require('mysql');
        var express = require('express');
        var app = express();

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'me',
            password: 'secret',
            database: 'my_db'
        });

        if( !connection.connect()) {
            alert("cannot connect to Database. Please try again later.");
        } else {
            var insert = "INSERT INTO Feedback VALUES (NOW(), " + data.get("name") + ", " + data.get("email") + ", " + data.get("feedback") + ", " + data.get("image1") + ", " + data.get("image2") + ", " + data.get("image3") + ");";
            connection.query(insert);
        }*/
  }

  render() {
    return (
      <div className="Feedback">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="feedback" bsSize="large">
            <ControlLabel>User Feedback</ControlLabel>
            <FormControl
              autoFocus
              type="textarea"
              value={this.state.feedback}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="image1" bsSize="large">
            <ControlLabel>Image</ControlLabel>
            <FormControl
              autoFocus
              type="file"
              value={this.state.image1}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="image2" bsSize="large">
            <ControlLabel>Image 2</ControlLabel>
            <FormControl
              autoFocus
              type="file"
              value={this.state.image2}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="image3" bsSize="large">
            <ControlLabel>Image 3</ControlLabel>
            <FormControl
              autoFocus
              type="file"
              value={this.state.image3}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit Feedback
          </Button>
        </form>
      </div>
    );
  }
}