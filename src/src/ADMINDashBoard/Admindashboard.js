

import React, { Component } from "react";

import { Alert } from 'reactstrap';


class Admindashboard extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }


  componentDidMount() {
   
    this.intervalId = setInterval(() => this.loadData(), 1000);
    this.loadData(); // also load one immediately

  }
  loadData() {
    fetch(`http://localhost:9809/myprojectdb`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

 componentWillUnmount() {
    clearInterval(this.intervalId);
}




  render() {
    return (
      <div>
       
      </div>

    );
  }
}


export default Admindashboard;