import React, { useRef, useState } from 'react';
import './Tic-tac.css';
import circle_icon from '../src/assets/circle.png';
import cross_icon from '../src/assets/cross.png'
let data = ["", "", "", "", "", "", "", "", ""]
const Tictac = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleref = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_collection = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (data[num] !== "") return;
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src = ${cross_icon}>`;
      data[num] = "x";
      setCount((prev) => (prev + 1));
    }
    else {
      e.target.innerHTML = `<img src = ${circle_icon}>`;
      data[num] = "o";
      setCount((prev) => (prev + 1))
    }
    checkwin();
  }
  const checkwin = () => {
    const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let [a,b,c] of wins) {
    if (data[a] !== "" && data[a] === data[b] && data[b] === data[c]) {
      won(data[a]);
      return;
    }
  }

  // Draw
  if (!data.includes("")) {
    won("draw");
  }
  }
  const won = (winner) => {
    setLock(true);
    if (winner === 'o') {
      titleref.current.innerHTML = `Congratulations: <img src = ${circle_icon}> wins`
    }
    else if(winner ==='x')  {
      titleref.current.innerHTML = `Congratulations: <img src = ${cross_icon}> wins`
    }
    else if (winner === "draw") {
    titleref.current.innerHTML = `Game was a draw`;
  }
  }
  const handlereset = () => {
    setLock(false)
    data = ["","","","","","","","",""];
    titleref.current.innerHTML = 'Tic-tac-Toe Using <span>React</span>'
    box_collection.map(e => {
      e.current.innerHTML = "";
    })
    setCount(0);
  }
  
  return (
    <div className="container">
      <h1 className='title' ref={titleref}>Tic-tac-Toe Using <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={e => toggle(e, 0)}></div>
          <div className="boxes" ref={box2} onClick={e => toggle(e, 1)}></div>
          <div className="boxes" ref={box3} onClick={e => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={e => toggle(e, 3)}></div>
          <div className="boxes" ref={box5} onClick={e => toggle(e, 4)}></div>
          <div className="boxes" ref={box6} onClick={e => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={e => toggle(e, 6)}></div>
          <div className="boxes" ref={box8} onClick={e => toggle(e, 7)}></div>
          <div className="boxes" ref={box9} onClick={e => toggle(e, 8)}></div>
        </div>
      </div>
      <div className="reset">
        <button onClick={handlereset}>Reset</button>
      </div>
    </div>
  )
}
export default Tictac