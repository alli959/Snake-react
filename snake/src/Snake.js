import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './Snake.css';
import leftImg from './png/left.png'
import downImg from './png/down.png'
import rightImg from './png/right.png'
import upImg from './png/up.png'
import controller from './png/controller.png'



function Snake() {


  const [board, setBoard] = useState(
    {width: 512,
    height: 512});

  const [images, setImages] = useState([leftImg]);




  
  const [snake, setSnake] = useState(
    {cellSize: 16,
    xSnakePos: [32, 16, 0],
    ySnakePos: [0, 0, 0],
    snakeSpeed: 3,
    isRight: true,
    isLeft: false,
    isTop: false,
    isBottom: false,}
    );

    const leftClick = () => {
      console.log("leftClick");
    }

    const rightClick = () => {
      console.log("rightClick");
    }
    const upClick = () => {
      console.log("upClick");
      
    }
    const downClick = () => {
      console.log("downclick");
    }




  





  return (
    <div className="Game">
      <div className = "Snake">

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

export default Snake;
