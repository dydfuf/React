import React, { Component, Fragment} from 'react';
import './App.css';

class App extends Component{
  render(){
    const text = "당신은 어썸한가요?";
    const condition = true;
    const style = {
      backgroundColor : 'gray',
      border : '1px solid black',
      height : Math.round(Math.random() * 300) + 50,
      width : Math.round(Math.random() * 300) + 50,
      WebkitTransition : 'all',
      MozTransition : 'all',
      msTransition : 'all'
    };
    return (
      <div className="my-div">
        <h2>리액트 안녕!</h2>
        <h2>당신은 어썸한가요?</h2>
        <h1>{text}</h1>
        {
          condition ? 'dd' : '거짓'
        }
        <div 
        style = {style}></div>
      </div>

    );
  }
}

export default App;
