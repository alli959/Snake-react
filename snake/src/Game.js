import React, {useState, useEffect} from 'react';
import './Game.css';
import leftImg from './png/left.png'
import controller from './png/controller.png'
import Snake from './Snake.js'
import Food from './Food.js'
import {withRouter } from 'react-router-dom'



function Game() {

  
  

  let [left, setLeft] = useState(false);
  let [right, setRight] = useState(true);
  let [up, setUp] = useState(false);
  let [down, setDown] = useState(false);

  let [snake, setSnake] = useState(
    {
    cellSize: 2,
    snakePos: [[0,0],[2,0],[4,0]],
    snakeSpeed: 1000,
    }
  );

  let [food, setFood] = useState([Math.floor(Math.random() * 99),Math.floor(Math.random() * 99)])



  

    const leftClick = () => {
      if(!right){
        
        setLeft(true);
        setRight(false);
        setDown(false);
        setUp(false);
      }
    }

    const rightClick = () => {
      if(!left){
        
        setLeft(false);
        setRight(true);
        setDown(false);
        setUp(false);
      }
    }
    const upClick = () => {
      if(!down){
        
        setLeft(false);
        setRight(false);
        setDown(false);
        setUp(true);
      }
      
    }
    const downClick = () => {
      if(!up){
        setLeft(false);
        setRight(false);
        setDown(true);
        setUp(false);
      }
    }

    const moveSnake = () => {
      const tempSnake = {...snake};
      let position = tempSnake.snakePos;
      let endIndex = position.length-1
      let end = position[endIndex];
      let Food = food;


        if(right) {
          let x = end[0] + 2
          let y = end[1]
          if(Food[1] === y){
            if(Food[0] === x){
              console.log("collision");
            }
          }
          if(x >= 100) {
            x = x - 100;
          }
          position[endIndex] = [x,y]
        }
        if(left) {
          let x = end[0] -2
          let y = end[1]
          if(x < 0) {
            x = x + 100 
          }
          position[endIndex] = [x,y]
        }
        if(down) {
          let x = end[0]
          let y = end[1] + 2
          if(y >= 100){
            y = y - 100;
          }
          position[endIndex] = [x,y]
        }
        if(up) {
          let x = end[0]
          let y = end[1] -2
          if(y < 0){
            y = y + 100;
          }
          position[endIndex] = [x,y]
        }
        

        for(let i = endIndex-1; i>=0; i-=1 ){
          
          const temp = position[i];
          position[i] = end;
          end = temp;
        }
        tempSnake.snakePos = position;
        setSnake(tempSnake)        
    }


    useEffect(() => {
      let tempSnake = {...snake};
      let position = tempSnake.snakePos;
      let endIndex = position.length-1
      let end = position[endIndex];
      let timer = setTimeout(moveSnake,50,tempSnake,position,endIndex,end);
      return () => clearTimeout(timer);
    },[moveSnake,snake])










  return (
    <div className="Game">
      <div className = "Snake">
        < Snake position = {snake.snakePos}/>
        < Food left = {food[0]} top = {food[1]} />
      </div>
      <div className = "Buttons">
      
        <div className = "leftButtonGroup">
        <img className = "movement" src = {controller} alt = "controller" style = {{width: "70%",heigth:"60%"}} useMap="#movement"></img>

        <map name = "movement">
          <area name = "leftClick" shape = "poly" coords="38,75,0,75,0,45,36,45,51,60" onClick = {leftClick} alt="Sun"></area>
          <area name = "rightClick" shape = "poly" coords="81,75,120,75,120,44,81,45,68,59" onClick = {rightClick} alt="Sun"></area>
          <area name = "upClick" shape = "poly" coords="75,37,75,0,45,0,45,35,60,53" onClick = {upClick} alt="Sun"></area>
          <area name = "downClick" shape = "poly" coords="46,81,45,120,75,120,74,81,59,69" onClick = {downClick} alt="Sun"></area>
        </map>
        
          
      </div>
        
        <div className = "rightButtonGroup">
          
        </div>
      </div>
    </div>
  );
}

export default withRouter(Game);
