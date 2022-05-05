// import functions and grab DOM elements
import { renderGoblin } from './render-utils';
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let goblins = [
    {
        name: 'Bozorg', hp: 1
    },
    {
        name: 'King Gobs', hp: 4 
    },
];

// set event listeners 
// - New goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
  // get user input
  //- User has supplied a name and submitted the form
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

  //Make a new goblin object with that user input

    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    //Add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});
  
  // use user input to update state 
  // update DOM to reflect the new state
