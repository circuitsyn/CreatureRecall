import React from "react";
import Cards from "../Card/card";
import creaturesData from "../../creatures.json";


function CardComponents() {
        const creatureComponents = creaturesData.map(creature =>
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
