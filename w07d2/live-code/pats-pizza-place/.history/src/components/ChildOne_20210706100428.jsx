import {useState} from 'react';

const ChildOne = (props) => {

  const [childDay,setChildDay] = useState('');

  return (
    <div>
      <h2>ChildOne: {props.specialText}</h2>
    </div>
  );

}

export default ChildOne;