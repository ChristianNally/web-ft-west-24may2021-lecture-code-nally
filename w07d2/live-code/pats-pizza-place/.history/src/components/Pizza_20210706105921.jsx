import {useState} from 'react';

const Pizza = () => {
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState('deep dish');

  const [newTopping, setNewTopping] =useState('');


  return (
    <div>
      <h2>Create Your Own Pizza!</h2>

      <div>
        <h2>Crust: {crust} </h2>
        <input
          value={crust}
          onChange={setCrust}
        />
      </div>



    </div>
);


};