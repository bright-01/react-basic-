import logo from './logo.svg';
import './App.css';

function AppJSX() {

  const userName = "귓밥왕";
  const list = ["우유", "딸기", "바나나"];

  return (
      <div className="App">
        <h1 className="orange">{`HELLO!! ${userName}`}</h1>

        <ul>
          {
            list.map((item)=>(
              <li>{item}</li>
            ))
          }
        </ul>

      </div>
  );
}

export default AppJSX;
