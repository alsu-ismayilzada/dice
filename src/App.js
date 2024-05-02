import "./style.css";
import Dice from "./Dice";
export default function App() {

  function clickVoid() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log("as"+randomNumber);
  }
  return (
    <div className="App">
      <Dice onClick={clickVoid} />
      <Dice onClick={clickVoid}/>
      <Dice onClick={clickVoid}/>
    </div>
  );
}