import React from 'react';

import {Row,Col} from "rsuite";
import './Navbar.css';

export  default function Navbarm(props){
    return(
        <Row gutter={0}> 
        <Col xs={24} sm={24} md={11} lg={11} style={{textAlign:'left'}} className="mheading"> Weather </Col>
          <Col xs={24} sm={24} md={11} lg={11} className="search">
        <form onSubmit={(e)=> {props.changeWeather(e)}}>
            <input type="text"  placeholder="Search" onChange={(e) => { props.changeRegion(e.target.value) }} className="minput"/>
            </form>
        </Col>
        </Row>  
    )
}