import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './Snake.css';

function Snake() {


  const [board, setBoard] = useState(
    {width: 512,
    height: 512});

  
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




  





  return (
    <div className="Snake">
      <div className = "Game">
        
      </div>
    </div>
  );
}

export default Snake;
