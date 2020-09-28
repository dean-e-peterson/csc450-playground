import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        alert("Response is " + xhr.responseText);
      }
    }
    xhr.open("POST", "/api/login");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send('{ "key": "some value" }');    
  }

  useEffect(() => {
    // Get initial data here.
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <input 
            name="email" 
            placeholder="email"
            onChange={onChange} 
          /><br />
          <input 
            name="password"
            type="password"
            placeholder="password"
            onChange={onChange}            
          /><br />
          <input 
            type="submit"
          />
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
