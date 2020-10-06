import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  let btnClass = '';
  const assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push('red');
  }
  if (props.persons.length <= 1) {
    assignedClasses.push('bold');
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am a React App</h1>
      <p>This is really working..!!!</p>
      <button onClick={props.click} className={btnClass}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
