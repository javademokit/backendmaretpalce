
import React, { Component } from "react";
import './mybid.css';
import { Alert } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col, CardBody, CardFooter, CardSubtitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { CardHeader } from "semantic-ui-react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import usercard from './usercard'
import 'antd/dist/antd.css';

import { Progress } from 'antd';
import UserInfo from './UserInfo'

class mydashboard extends Component {

  constructor() {
    super();
    this.state = {
       data: [
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": null,
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": null,
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": null,
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": null,
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": null,
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": null,
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": null,
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
         "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut "
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
       
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
       
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
           
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         },
         {
          
           "title": "myproject",
           "ProjectTitle": "Copper replacememnt for Shefield",
           "Localtion": "shefield and Lincs",
           "PostedBy": "Openreach UK",
           "endsBy": "8/16/2018",
           "comment": " Lorem ipsum dolor sit ament,consecutore adipcing elit,sed do eiusmod tempor incididunt ut ",
           "Bestprice": 300.0
         }
       
      
      
      
       ]};
  }


  componentDidMount() {

    this.intervalId = setInterval(() => this.loadData(), 100);
    this.loadData(); // also load one immediately

 }

  loadData() {
    
    fetch(`http://localhost:8080/percentage`)
      .then(res => res.json())
      .then(json => this.setState({ result: json }));
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  

  UPDATEPROJECTSTATUS() {

  }


  render() {
    return (
      <div className="container" >
    <div class="card">
    <div style={{backgroundColor:"green", height:"11.6rem"}}>
  
<table style={{marginTop:"9px" ,width:"17%",cellpadding:"18"}}>
<tr>
<th style={{textAlign:"left"}}> <Progress type="circle" percent={100} /></th>
<th style={{textAlign:"left"}}> <Progress type="circle" percent={56} /></th>
<th style={{textAlign:"left"}}> <Progress type="circle" percent={100} /></th>
<th style={{textAlign:"left"}}> <Progress type="circle" percent={100} /></th>
<th style={{textAlign:"left"}}> <Progress type="circle" percent={100} /></th>
</tr>
<tr>
  <td style={{verticalAlign:"center",width:"17%",cellpadding:"10"}}><b>App</b></td>
  <td>Admin</td>
  <td>work</td>
  <td>call</td>


  </tr>
</table>
    {/* <Progress type="circle" percent={56} />&nbsp;&nbsp;&nbsp;&nbsp; */}

    

  </div>,
          <hr className="hr"></hr>
          <header><div><h><b>MyIndexpage</b></h></div></header>
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
                        <a class="btn btn-primary btn-rounded" ripple-radius>BidNow</a>                        </div></td>

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

            <div class="topright" style={{ height: "200px", width: "350px", marginTop: "0px" }} >
              
              <Card className="border-success" >
                <CardBody>
                  <CardTitle>
                    <div>
                   

                   
                    </div>
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
                  <CardText>  <div id="center"><b>johan@construction.UK</b></div>  </CardText>

                  <CardText>  <div id="center">    <MDBBtn rounded color="success">Update</MDBBtn></div>  </CardText>

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