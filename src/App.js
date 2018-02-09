import React, { Component } from 'react';
// import logo from './Y.svg';
import './App.scss';
import './Poem'
import Poem from './Poem';

const POETRY_END = "https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      poetry: [{
        "detail_text": '在这个简单的页面中，下面两个按钮的作用，邂逅：随机切换下一首诗，诗意：显示当前诗的释义',
        "detail_author": '未枝丫',
        "detail_background_text": ["Idea来自于我初学JS时，写的第一个比较完整且喜欢的页面，因为最近在学习 React，为了练手就重写了一遍，用时大概是当初的一半吧，虽然现在重看之前的代码就觉得十分惨不忍睹，但会越来越好。"],
        "detail_translate_text": ["Ummm，因为页面的结构是这样，所以就强行写一点废话，如果你有新脑洞，也欢迎和我分享呜，笔芯❤️"]
      }],
      index: 0,
      onDetail: false,
      toggle: false
    }
  }

  componentDidMount() {
    fetch(POETRY_END)
      .then(res => res.json())
      .then(
        (result) => {
          const data = this.state.poetry.concat(result)
          this.setState({
            isLoaded: true,
            poetry: data
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  handleRandom() {
    const total = this.state.poetry.length - 1;
    const randomNum = Math.ceil(Math.random() * total);
    this.setState({
      index: randomNum,
      toggle: !this.state.toggle
    })
  }

  handleToggle() {
    this.setState({
      onDetail: !this.state.onDetail
    })
  }

  render() {
    const current = this.state.poetry[this.state.index];

    return (
      <div className="App">
        <Poem
          data={current}
          onDetail={this.state.onDetail}
          toggle={this.state.toggle}
        ></Poem>
        <div className="poem-ctrl">
            <button 
              className={this.state.onDetail ? "btn detail on" : "btn detail"} 
              onClick={() => this.handleToggle()}>诗意</button>
            <button className="btn random" onClick={() => this.handleRandom()}>邂逅</button>
        </div>
        <footer className="footer">
          <a href="https://github.com/Unknow-Y/poetry-encounter">
             Code by Soyaine with ❤ host on GitHub
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
