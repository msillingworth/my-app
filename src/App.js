import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="row">
          <div id="menu" class="column">
            <a href="http://www.google.com">Google</a>
            <img src="assets/img/baseline_settings_black_24dp.png" alt=""></img>
          </div>
          <div id="content" class="column">Content</div>
        </div> 
      </div>
    );
  }
}

export default App;
