import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Milan", age: 38 },
      { name: "Petra", age: 32 },
      { name: "Milica", age: 7 }
    ],
    otherState: "Some value"
  };

  switchNameHandler = (newName) => {
    // DON'T USE THIS: this.state.persons[0].name = "Vojov mali"
    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: "Petra", age: 32 },
        { name: "Milica", age: 6 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: event.target.value, age: 32 },
        { name: "Milica", age: 6 }
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      paddng: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App! :-)</h1>
        <p>This really works!</p>
        <button
          style={style} 
          onClick={this.switchNameHandler.bind(this, "Mile")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.sState.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "Miks!")} />
          changed={this.nameChangedHandler}
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My hobbies: Drawing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is what jsx gets compiled to'));
}

export default App;


