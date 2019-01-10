import React, { Component } from "react";
import Card from "../Card/card";
import creaturesData from "../../creatures.json";
import Jumbo from '../JumboGreeting/JumboGreeting';
import NavBar from '../NavBar/NavBar';
import "./style.css";

class mainGame extends Component {

    state = {
        creaturesData,
        score: 0,
        topScore: 0,
        message: "Start by clicking any of the images below!"
    };

    //upon page load run the shuffle function
    componentDidMount() {
        this.setState({ creaturesData: this.shuffleData(this.state.creaturesData)})
    }

    //function to shuffle data
    shuffleData = () => {
        let newArr = creaturesData.sort(function(){return 0.5 - Math.random()}); 
        console.log("I'm shuffled!")
        console.log("newArr: ", newArr);
        return newArr;
    }

    clickListener = () => {
        this.setState({creaturesData: this.shuffleData(this.state.creaturesData)});
    }
    
    

    render() {
        
        return (
        <div>
            <NavBar score={this.state.score} topScore={this.state.topScore} />
            <Jumbo message={this.state.message}/>
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    {this.state.creaturesData.map(creature =>
                    <Card handleClick={this.clickListener} key={creature.id} name={creature.name} image={creature.image} class={creature.class} fact={creature.fact} link={creature.link} />)}
                </div>    
            </div>  
        </div> 
        );
    }
}

export default mainGame;
