import React from 'react';
import Toggle from './Q_1'; // Import the Toggle component
import Timer from './Q_2'; // Import the Timer component
import TodoList from './Q_3'; // Import the TodoList component
import CardList from './Q_4- Part-2'; // Import the CardList component
import Form from './Q_5'; // Import the Form component


function App() {
  const todos = [
    'Learn React',
    'Build a project',
    'Go for a walk',
    'Do some exercises',
    'Join a music class',
    'Read a novel'
  ];

  const cards = [
    { title: 'Card 1', content: 'This is the content of Card 1' },
    { title: 'Card 2', content: 'This is the content of Card 2' },
    { title: 'Card 3', content: 'This is the content of Card 3' }
  ];

  return (
    <div>
      <h1>Activity 01</h1>
      <h3>Toggle Component Example</h3>
      <Toggle /> {/* Use the Toggle component */}
      <br />

      <h1>Activity 02</h1>
      <h3>Timer Component Example</h3>
      <Timer /> {/* Use the Timer component */}
      <br />

      <h1>Activity 03</h1>
      <h3>My Todo List App</h3>
      <TodoList todos={todos} /> {/* Use the TodoList component and pass the todos array */}
      <br />

      <h1>Activity 04</h1>
      <h3>My Card List App</h3>
      <CardList cards={cards} /> {/* Use the CardList component and pass the cards array */}
      <br />

      <h1>Activity 05</h1>
      <h3>My Form App</h3>
      <Form /> {/* Use the Form component */}
    </div>
  );
}

export default App;

