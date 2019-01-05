import React from "react";
import "./style.css";



function Card(props) {
    console.log(props);

    return (
    
        <div class="card col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 m-3">
            <img class="card-img-top cardImg" src={props.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title"><strong>Name: </strong> {props.name}</h5>
                <h6><strong>Class: </strong>{props.class}</h6>
                <p class="card-text"><strong>Fun Fact: </strong>{props.fact}</p>
                <a href={props.link} target="_blank" class="btn btn-primary">Learn more!</a>
            </div>
        </div>
    
       
    );
}

export default Card;