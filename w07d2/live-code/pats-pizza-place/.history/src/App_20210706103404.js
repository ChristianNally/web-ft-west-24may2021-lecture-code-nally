import {useState, useEffect} from 'react';
// import Header from './components/Header';
// import Pizza from './components/Pizza';
import ChildOne from './components/ChildOne';

import './App.css';

function App() {

  const [day,setDay] = useState('Tuesday');

  const updateDay = (newDay) => {
    const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    if (validDays.includes(newDay)) {
      setDay(newDay);
    } else {
      setDay('day not found');
    }
  };

  return (
    <div className="App">
      <h1>MonkeyFuzz's Pizza Place</h1>
      <h2>The Day is : {day}</h2>
      <ChildOne specialText="monkey fuzz!" setDay={updateDay} />
    </div>
  );

}

export default App;
