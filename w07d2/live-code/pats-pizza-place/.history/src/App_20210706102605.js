// import {useState, useEffect} from 'react';
// import Header from './components/Header';
// import Pizza from './components/Pizza';
import ChildOne from './components/ChildOne';

import './App.css';

function App() {

  const [day,setDay] = useState('Friday');

  return (
    <div className="App">
      <h1>MonkeyFuzz's Pizza Place</h1>
  <h2>The Day is : {day}</h2>
      <ChildOne specialText="monkey fuzz!"/>
    </div>
  );

}

export default App;
