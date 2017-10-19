import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';
export default class Hello extends Component {
  render() {
    return (
     <div id="calculator">
    <input type="text" readonly="readonly" placeholder="0"></input>
    <div class="flex-container">
      <button class="flex-item">(</button>
      <button class="flex-item">)</button>
      <button class="flex-item">±</button>
      <button class="flex-item">÷</button>
      <button class="flex-item">7</button>
      <button class="flex-item">8</button>
      <button class="flex-item">9</button>
      <button class="flex-item">x</button>
      <button class="flex-item">4</button>
      <button class="flex-item">5</button>
      <button class="flex-item">6</button>
      <button class="flex-item">-</button>
      <button class="flex-item">1</button>
      <button class="flex-item">2</button>
      <button class="flex-item">3</button>
      <button class="flex-item">+</button>
      <button class="flex-item">0</button>
      <button class="flex-item">.</button>
      <button class="flex-item">C</button>
      <button class="flex-item">=</button>
    </div>
  </div>
  
    );
  }
}

render(<Hello />, document.getElementById('app'));