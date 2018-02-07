import React, { Component } from 'react';
// import logo from './Y.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="poem-content">
          故园东望路漫漫，双袖龙钟泪不干。<br></br>
          马上相逢无纸笔，凭君传语报平安。
        </div>
        <span className="poem-author">- 岑参 -</span>
        <div className="footer">
          <button className="btn detail">诗意</button>
          <button className="btn random">邂逅</button>
        </div>
      </div>
    );
  }
}

export default App;
