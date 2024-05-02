import "./style.css";
import { useState } from "react";
export default function Dice() {
  const [number, setNumber] = useState(3);

  function click() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
  }
  function renderDots() {
    const dots = [];
    for (let i = 0; i < number; i++) {
      if(number === 5){
        if(i === 3){
            dots.push(<span className="dot freePoint" key={i}></span>);
        }else{
            dots.push(<span className="dot" key={i}></span>);
        }
      }else if(number === 3){
            if(i === 0){
                dots.push(<span className="dot spesialPointOne" key={i}></span>);
            }else if(i === 1){
                dots.push(<span className="dot spesialPointTwo" key={i}></span>);
            }else{
                dots.push(<span className="dot spesialPointThree" key={i}></span>);
            }
      }else{
        dots.push(<span className="dot" key={i}></span>);
      }
      
    }
    return dots;
  }
  function addClassName() {
    if (number === 1) {
      return "onePoint";
    } else if (number === 2) {
      return "twoPoints";
    } else if (number === 3) {
      return "threePoints";
    } else if (number === 4) {
      return "fourPoints";
    } else if (number === 5) {
      return "fivePoints";
    } else {
      return "sixPoints";
    }
  }

  return (
    <div>
      <div onClick={click} className={`dice ${addClassName()}`}>
        {number && renderDots()}
      </div>
    </div>
  );
}
