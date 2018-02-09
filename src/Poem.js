import React, { Component } from 'react';

class Poem extends Component {
  render() {
    const poem = this.props.data;
    const lines = poem.detail_text.split(/[，。？]/);
    const author = poem["detail_author"];
    
    let background = null;
    let trans = null;

    if (poem["detail_background_text"] && poem["detail_background_text"][0] !== "") {
      const bgtext = poem["detail_background_text"][0];
      background = bgtext.replace(/\s+/, "");
    }

    if (poem["detail_translate_text"]) {
      const transText = poem["detail_translate_text"];
      trans = transText.join("\n");
    }

    return (
      <div className={this.props.onDetail ? "poem-content fire" : "poem-content"}>
        <span className={this.props.toggle ? "sign a" : "sign b"}>“</span>
        <div className={this.props.onDetail ? "flip fire" : "flip"}>
          <div className="poem-detail">
            <strong>{background ? '背景' : ''}</strong>
            <p>{background ? background : ''}</p>
            <strong>{trans ? '释义' : ''}</strong>
            <p>{trans ? trans : "暂无释义"}</p>
          </div>
          <div className="poem-text">
              {lines[0]}<br></br>
              {lines[1]}<br></br>
              {lines[2]}<br></br>
              {lines[3]}<br></br>
          </div>
        </div>
        <span className="poem-author">- {author} -</span>
      </div>
    )
  }
}

export default Poem;