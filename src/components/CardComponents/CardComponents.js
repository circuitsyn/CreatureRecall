import React from "react";
import Cards from "../Card/card";
import creaturesData from "../../creatures.json";

//function to shuffle data
function shuffleData(creaturesData) {
    creaturesData.sort(function(){return 0.5 - Math.random()}); 
    return creaturesData;
}



function CardComponents() {

    //function call to shuffle data
    shuffleData(creaturesData);

    //props build to map data to different cards
    let creatureComponents = creaturesData.map(creature =>
        <Cards key={creature.id} name={creature.name} image={creature.image} class={creature.class} fact={creature.fact} link={creature.link} />)
    

    return (
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            {creatureComponents}
        </div>    
    </div>   
    );
}

export default CardComponents;
