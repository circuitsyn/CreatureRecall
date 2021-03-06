import React, { Component } from 'react';
import "./style.css";
import $ from 'jquery';

function Card (props) {
    
    return (
        <div onClick={() => props.handleClick(props.id)} clickstatus={props.clickstatus} aria-label="click item" class="card col-6 col-sm-3 col-md-3 col-lg-3 col-xl-2 m-3">
            <img class="card-img-top cardImg" src={props.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title"><strong>Name: </strong> {props.name}</h5>
                <h6><strong>Class: </strong>{props.class}</h6>
                <p class="card-text"><strong>Fun Fact: </strong>{props.fact}</p>
                {/* <a href={props.link} target="_blank" class="btn btn-primary">Learn more!</a> */}
            </div>
        </div>
       
    );
} 


export default Card;