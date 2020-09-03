
import React, { Component } from "react";
import { Alert } from 'reactstrap';

import {
  Badge, Card, Button, CardHeader, CardFooter, CardBody, Col, row,
  CardTitle, CardText, Row
} from 'reactstrap';
import { Link, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './mybid.css';
import { MDBBtn } from "mdbreact";
import { BreadcrumbDivider } from "semantic-ui-react";
class mycard extends Component {

  constructor() {
    super();
    this.state = { data: [] };
  }


  componentDidMount() {
   
    this.intervalId = setInterval(() => this.loadData(), 100);
    this.loadData(); // also load one immediately

  }



  loadData() {
    fetch(`http://localhost:9809/mycardmongodb`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
}

UPDATEPROJECTSTATUS()
{

}
  render() {
    return (
      <div >


        
        <div className="text-left"  >
          <h1>My Bidds </h1>
        </div>
        <div>
          <Row>
            {this.state.data.map(el => (
              <Col xs="12" sm="6" md="4"  >
                <Card className="border-success" style={{ backgroundColor:'white'}}>
                  <CardHeader>
                    <div className="text-right">
                      <MDBBtn rounded color="info">{el.projectstatzus}</MDBBtn>
                    </div>
                    <div className="card-header-actions">
                    <header>
                      <h3 ><Link to="/DialogEdit">{el.prokjectheading}
                  </Link></h3></header>
                  </div>
                  </CardHeader>
                  <CardBody className="border-success">

                    <table class="w3-table w3-striped">
                    
                      <tr>
                        <td  id="p">Project Title:</td>
                        <td  id="p"> {el.projetctitle}</td>
                      </tr>
                      <tr>
                        <td id="p">Bid Date:</td>
                        <td  id="p">{el.biddate}</td>
                      </tr>
                      <tr>
                        <td id="p">Work Title:</td>
                        <td  id="p">{el.worktilte}</td>
                      </tr>
                    </table>

                  </CardBody>
                  <CardFooter className="border-info">
                  <div className='ui two buttons'>
                  <MDBBtn rounded color="info">Approved</MDBBtn>
                  <h>&nbsp;&nbsp;&nbsp;</h>
                  <MDBBtn rounded color="danger">Decline</MDBBtn>
              </div>   
       
                   <span class="largefont">Best price: ${el.bestprice}</span>  <span class="largefont">your  price: ${el.yourprice}</span> 

                  </CardFooter>

                </Card>
              </Col>

            ))}


          </Row>
        </div>

      </div>
    );
  }
}


export default mycard;