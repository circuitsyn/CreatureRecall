import React from "react";
import "./style.css";
import brandLogo from "./Crab.png";

function NavBar(props) {
    console.log(props);

    return (
    <div>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand font-weight-bolder" href="/">
            <img class="brandLogo mr-2" src={brandLogo} alt="nav bar brand logo crab image" />
            Creature Recall
            </a>

            <div class="float-right d-flex justify-content-end">
                <h3 class="ml-2 mr-2">Score: </h3>
                <button type="button" class="btn btn-primary ml-2 mr-2 font-weight-bolder">0</button>
                <h3 class="ml-2 mr-2">|</h3>
                <h3 class="ml-2 mr-2">Top Score: </h3>
                <button type="button" class="btn btn-primary ml-2 mr-2 font-weight-bolder">0</button>
            </div>
            
        </nav>
    </div>    
    );
}

export default NavBar;