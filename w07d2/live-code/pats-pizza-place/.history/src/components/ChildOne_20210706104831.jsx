import {useState} from 'react';

const ChildOne = (values) => {

  const [childDay,setChildDay] = useState('');

  return (
    <div>
      <h2>ChildOne: {values.specialText}</h2>
      <input 
        value={childDay}
        onChange={ event => setChildDay(event.target.value) }
      />
      <button onClick={ () => { values.setDay(childDay) } } >Set The Day!</button>
    </div>
  );

}

export default ChildOne;