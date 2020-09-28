import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        alert("Response is " + xhr.responseText);
      }
    }
    xhr.open("POST", "/testpost");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send('{ "key": "some value" }');
  });

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input placeholder="email" />
          <input type="password" placeholder="password" />
        </form>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
