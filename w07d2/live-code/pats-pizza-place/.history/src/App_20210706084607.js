import {useState, useEffect} from 'react';
import Header from './components/Header';
import Pizza from './components/Pizza';
import ChildOne from './components/ChildOne';
import './App.css';

function App() {

  return (
    <div className="App">
      <h2>The Parent App's Day is "{day}"</h2>
    </div>
  );

}

export default App;
