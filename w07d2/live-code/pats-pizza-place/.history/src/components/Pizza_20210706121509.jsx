import {useState} from 'react';

const Pizza = () => {
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState('deep dish');

  const [formVersionOfTheNewTopping, setFormVersionOfTheNewTopping] = useState('');

  const addTopping = () => {
    // setToppings([...toppings, formVersionOfTheNewTopping]);

    setToppings( intermediateValueOfTheToppingsState => {
      return [
        ...intermediateValueOfTheToppingsState,
        formVersionOfTheNewTopping
      ];
    } );

  };

  return (
    <div>
      <h2>Create Your Own Pizza!</h2>

      <div>
        <h2>Crust: {crust} </h2>
        <input
          value={crust}
          onChange={event => setCrust(event.target.value)}
        />
      </div>

      <div>
        <input 
          value={formVersionOfTheNewTopping}
          onChange={(event) => { setFormVersionOfTheNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add topping</button>
      </div>

      <div>
        <h2>Toppings!</h2>
        {
          toppings.map( (topping, index) => {
            return <p key={index}>{topping}</p>
          } )
        }
      </div>
    </div>
  );

};

export default Pizza;