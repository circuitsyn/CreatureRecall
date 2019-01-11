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
        // console.log('data at load: ', this.state.creaturesData);
        this.setState({ creaturesData: this.shuffleData(this.state.creaturesData)})
    }


    //function to shuffle data
    shuffleData = () => {
        // console.log('creaturesData before sort: ', this.state.creaturesData);
        // console.log('newArr before sort', newArr);
        let newArr = this.state.creaturesData.sort(function(){return 0.5 - Math.random()}); 
        console.log("I'm shuffled!")
        // console.log('creaturesData after sort: ', this.state.creaturesData);
        // console.log('newArr after sort', newArr);
        return newArr;
    }

    //function triggered from clicking on card
    clickListener = (id) => {
        console.log('id coming in from click: ', id);


        let shallowCopy = this.state.creaturesData;
        console.log('shallowCopy: ', shallowCopy)
        
        for (let i = 0; i < shallowCopy.length; i++) {
            if(shallowCopy[i].id == id) {

                let clickCheck = shallowCopy[i].clicked;
                console.log('stored clicked value', clickCheck);
                //check to see if card has been clicked before and execute actions based on results
                if (!clickCheck){
                    console.log("you haven't been clicked!");
                    this.state.score++;
                    shallowCopy[i].clicked = true;
                    this.setState({
                        creaturesData: shallowCopy
                    });
                } 
                //alternative if the card has been clicked before and run actions as a result
                else if (clickCheck) {
                    console.log("I'm already clicked!")
                    this.state.score = 0;
                }
            }
        }
        
        // check and set high score
        if (this.state.score > this.state.topScore) {
            this.state.topScore = this.state.score;
        }
        console.log('creaturesData in game logic: ', creaturesData)
        //shuffle data after each click
        this.setState({creaturesData: this.shuffleData(this.state.creaturesData)});
        // return clickCheck;
    
    }
    
    

    render() {
        
        return (
        <div>
            <NavBar score={this.state.score} topScore={this.state.topScore} />
            <Jumbo message={this.state.message}/>
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    {this.state.creaturesData.map(creature =>
                    <Card handleClick={this.clickListener} key={creature.id} id={creature.id} clickstatus={creature.clicked.toString()} name={creature.name} image={creature.image} class={creature.class} fact={creature.fact} link={creature.link} />)}
                </div>    
            </div>  
        </div> 
        );
    }
}

export default mainGame;
