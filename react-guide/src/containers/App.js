import React, { Component } from 'react';
import css from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Priyesh K', age: 28 },
      { id: 2, name: 'Namitha', age: 26 },
      { id: 3, name: 'Max Millian', age: 29 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  changedNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === personId;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changedNameHandler}
        ></Persons>
      );
    }

    return (
      <div className={css.App} color="red">
        <Cockpit
          click={this.togglePersonHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;

// let defaultState = {
//   persons: [
//     { name: 'Priyesh', age: 28 },
//     { name: 'Namitha', age: 26 },
//     { name: 'Max', age: 29 },
//   ],
//   otherState: 'some other state',
// };
// const App = (props) => {
//   const [personsState, setPersonState] = useState(defaultState);

//   console.log(personsState);
//   const switchNameHandler = () => {
//     // console.log('was clicked');
//     setPersonState({
//       ...defaultState,
//       persons: [
//         { name: 'Priyesh K', age: 28 },
//         { name: 'Namitha P', age: 26 },
//         { name: 'Max Millian', age: 29 },
//       ],
//     });
//   };

//   return (
//     <div className="App" color="red">
//       <h1>Hi, I am a React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         {'Hobbies: Cooking'}
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
