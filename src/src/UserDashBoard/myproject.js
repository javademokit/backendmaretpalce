

import React, { Component } from "react";
import './mybid.css';
import { Alert } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col, CardBody, CardFooter } from 'reactstrap';
import { CardHeader } from "semantic-ui-react";
import { MDBBtn } from "mdbreact";
import { Link, Route, Switch } from "react-router-dom";

class myproject extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }


  componentDidMount() {
   
    this.intervalId = setInterval(() => this.loadData(), 1000);
    this.loadData(); // also load one immediately

  }
  loadData() {
    fetch(`http://localhost:7071/myprojectdb`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

 componentWillUnmount() {
    clearInterval(this.intervalId);
}




  render() {
    return (
      <div>
        <h1>Myproject </h1>
        <Row>
          {this.state.data.map(el => (
            <Col sm="6">
              <Card className="border-success" style={{ backgroundColor:'white'}}>
                <CardHeader>
                  <div className="text-right">
                    <MDBBtn rounded color="success">{el.status}</MDBBtn>
                  </div>
                  <div className="card-header-actions">
                    <header>
                      <h3 ><Link to="/DialogEdit">{el.projetcname}
                  </Link></h3></header>
                  </div>
                </CardHeader>
                <CardBody className="border-success">
                {/* <CardTitle>Card Title</CardTitle> */}
                  <table class="w3-table w3-striped">
                    <tr>
                      <td id="p">Project Title:</td>
                      <td id="p"> {el.projectdeatils}</td>
                    </tr>
                    <tr>
                      <td id="p">Bid Date:</td>
                      <td id="p">{el.date}</td>
                    </tr>
                    <tr>
                      <td id="p">work Tile:</td>
                      <td id="p">{el.worktitle}</td>
                    </tr>
                  </table>
                </CardBody>
                <CardFooter className="border-info" >
                  <div class="card-footer bg-white no-padding-left no-padding-right">
                  <h>  <button class="btn btn-outline-info btn-sm">Address:<i class="fa fa-map-marker mr-2"></i> {el.address}</button></h>
                  </div>
                </CardFooter>

              </Card>
            </Col>

          ))}




        </Row>


        

      </div>

    );
  }
}


export default myproject;