import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Milan", age: 38 },
      { name: "Petra", age: 32 },
      { name: "Milica", age: 7 }
    ],
    otherState: "Some value"
  })

  const switchNameHandler = () => {
    // DON'T USE THIS: this.state.persons[0].name = "Vojov mali"
    this.setState( {
      persons: [
        { name: "Vojov mali", age: 38 },
        { name: "Petra", age: 32 },
        { name: "Milica", age: 6 }
      ]
    } )
  }
  
    return (
      <div className="App">
        <h1>Hi, I'm React App! :-)</h1>
        <p>This really works!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: Drawing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is what jsx gets compiled to'));
}

export default app;


