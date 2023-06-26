// CharacterForm.js
import React, { useState } from 'react';

const CharacterForm = ({ addCharacter }) => {
  const [name, setName] = useState('');
  const [power, setPower] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && power.trim()) {
      const character = { name, power };
      addCharacter(character);
      setName('');
      setPower('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Character</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="power">Power:</label>
      <input
        type="text"
        id="power"
        value={power}
        onChange={(e) => setPower(e.target.value)}
      />
      <button type="submit">Add Character</button>
    </form>
  );
};

export default CharacterForm;
