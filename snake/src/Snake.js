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
      
    }
    const upClick = () => {
      
    }
    const downClick = () => {
      
    }




  





  return (
    <div className="Game">
      <div className = "Snake">

      </div>
      <div className = "Buttons">
      
        <div className = "leftButtonGroup">
        <img id = "leftButtonGroup" onClick = {upClick} src = {controller} alt = "up"></img>
          
          <div className = "verticalButtons">
          </div>

        </div>
        
        <div className = "rightButtonGroup">
          
        </div>
      </div>
    </div>
  );
}

export default Snake;
