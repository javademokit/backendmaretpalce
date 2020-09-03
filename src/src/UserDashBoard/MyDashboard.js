

import React, { Component } from "react";
import './mybid.css';
import { Alert } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col, CardBody, CardFooter, CardSubtitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { CardHeader } from "semantic-ui-react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import { Link, Route, Switch } from "react-router-dom";

class mydashboard extends Component {


  constructor() {
    super();
    this.state = { data: [] }
  }


  componentDidMount() {

    this.intervalId = setInterval(() => this.loadData(), 100);
    this.loadData(); // also load one immediately

  }

  loadData() {
    fetch(`http://localhost:9809/MyIndexpage`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  UPDATEPROJECTSTATUS() {

  }


  render() {
    return (
      <div className="container">
        <div class="card" >
        
          <div class="progress-circle over50 p77">
            <span>100%</span>
            <div class="left-half-clipper">
              <div class="first50-bar"></div>
              <div class="value-bar"></div>
            </div>
          </div>

          <hr className="hr"></hr>
          <Row>
            {this.state.data.map(el => (

              <Col sm="8" >
                <Card style={{ backgroundColor: 'white' }}>


                  <CardBody >
                    <table >

                      <tr>
                        <td rowSpan="7">
                          <button class="button button5">AB</button>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="7"> <a href="wwwwwww">{el.ProjectTitle} </a> </th>
                      </tr>
                      <tr>
                        <td >Location:</td>
                        <td > {el.Localtion}</td>
                        <td > <div className="text-right"> BP:${el.Bestprice} </div></td>
                      </tr>
                      <tr>
                        <td >PostedBy:</td>
                        <td >{el.PostedBy} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;EndsBY:{el.endsBy} </td>
                        <td > <div className="text-right">
                          <MDBBtn rounded color="info">BidNow</MDBBtn>
                        </div></td>

                      </tr>
                      <tr>
                        <td >comment:</td>
                        <td colSpan="5">{el.comment}</td>

                      </tr>

                      <tr>


                      </tr>
                      <tr>


                      </tr>
                    </table>
                  </CardBody>
                </Card>
                {/* <hr className="hr"></hr> */}
              </Col>

            ))}

            <div class="topright" style={{ height: "200px", width: "350px", marginTop: "8px" }} >

              <Card className="border-success">

                <CardBody>

                  <CardTitle>
                    <div id="center">  <a href="wweeeee.com">Welcome Back Morrison Constrcution</a></div>
                  </CardTitle>
                  <CardSubtitle><div id="center">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>

                  </div></CardSubtitle>
                  <CardSubtitle>

                    <div id="center">

                      <i class="fa fa-map-marker" id="location"></i>

                    </div>

                  </CardSubtitle>
                  <CardText>  <div id="center">Johan@construction.UK</div>  </CardText>

                  <CardText>  <div id="center">    <MDBBtn rounded color="success">Update Profile</MDBBtn></div>  </CardText>

                </CardBody>
              </Card>


              <hr className="hr"></hr>

              <ListGroup>
                <ListGroupItem >
                  <ListGroupItemHeading><b>ProjectOverview</b><hr></hr></ListGroupItemHeading>

                  <ListGroupItemText>
                    <grid><a href="wwwwhh">Installation of tellecom Doc</a></grid>

                    <span class="dot">
                    </span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>

                  </ListGroupItemText>
                  <ListGroupItemText>
                    <grid>Ends:22/02/2018</grid>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <grid>Light source Design Limited  </grid> <i class="fa fa-map-marker" id="location1"></i>
                  </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem>
                  <ListGroupItemHeading>
                    <grid><a href="wwwwhh">Fiber expesesion in derby</a></grid>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <grid>Ends:22/02/2018</grid>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <grid>Openreach UK </grid> <i class="fa fa-map-marker" id="location2"></i>

                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    <grid><a href="wwwwhh">Build Temporrary peldestrain walkway</a></grid>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <grid>Ends:22/02/2018</grid>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <grid>Vodafone UK</grid> <i class="fa fa-map-marker" id="location2"></i>
                  </ListGroupItemText>
                  <hr></hr>
                  <div id="right">
                    <a href="wwwwweee"> Find more...</a>
                  </div>

                </ListGroupItem>

              </ListGroup>


              <hr className="hr"></hr>


              <ListGroup>
                <ListGroupItem >
                  <ListGroupItemHeading><b>BidsOverview</b><hr></hr></ListGroupItemHeading>
                  <ListGroupItemHeading>
                    <grid><a href="wwwwhh">Fiber expesesion in derby</a></grid>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <grid>Ends:22/07/2019</grid>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <grid>Openraech UK</grid> <i class="fa fa-map-marker" id="location2"></i>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <div id="rebids"> 
                      <grid>B.P:$200</grid>&nbsp;&nbsp;&nbsp;<grid>Avg:$100</grid> <div id="rebidsadd"><MDBBtn rounded color="success">ReBid</MDBBtn></div>
                    </div>
                  </ListGroupItemText>
                </ListGroupItem>

              </ListGroup>

           <hr className="hr"></hr>
           <ListGroup>
                <ListGroupItem >
                  <ListGroupItemHeading><b>BidsOverview</b><hr></hr></ListGroupItemHeading>
                  <ListGroupItemHeading>
                    <grid><a href="wwwwhh">Fiber expesesion in derby</a></grid>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <grid>Ends:22/07/2019</grid>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <grid>Openraech UK</grid> <i class="fa fa-map-marker" id="location2"></i>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <div id="rebids"> 
                      <grid>B.P:$200</grid>&nbsp;&nbsp;&nbsp;<grid>Avg:$100</grid> <div id="rebidsadd"><MDBBtn rounded color="success">ReBid</MDBBtn></div>
                    </div>
                  </ListGroupItemText>
                </ListGroupItem>

              </ListGroup>

           <hr className="hr"></hr> <ListGroup>
                <ListGroupItem >
                  <ListGroupItemHeading><b>BidsOverview</b><hr></hr></ListGroupItemHeading>
                  <ListGroupItemHeading>
                    <grid><a href="wwwwhh">Fiber expesesion in derby</a></grid>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <grid>Ends:22/07/2019</grid>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <grid>Openraech UK</grid> <i class="fa fa-map-marker" id="location2"></i>
                  </ListGroupItemText>
                  <ListGroupItemText>
                    <div id="rebids"> 
                      <grid>B.P:$200</grid>&nbsp;&nbsp;&nbsp;<grid>Avg:$100</grid> <div id="rebidsadd"><MDBBtn rounded color="success">ReBid</MDBBtn></div>
                    </div>
                  </ListGroupItemText>
                </ListGroupItem>

              </ListGroup>

           <hr className="hr"></hr>



            </div>

          </Row>

        </div>
      </div>

    );
  }
}


export default mydashboard;