import React, { useState } from 'react';
import CharacterForm from './CharacterForm';
import CharacterBattle from './CharacterBattle';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (character) => {
    setCharacters([...characters, character]);
  };

  return (
    <div>
      <h1>Character Battler</h1>
      <CharacterForm addCharacter={addCharacter} />
      <CharacterBattle characters={characters} />
    </div>
  );
};

export default App;