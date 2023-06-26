// CharacterBattle.js
import React, { useState } from 'react';

const CharacterBattle = ({ characters }) => {
  const [battleResult, setBattleResult] = useState('');

  const handleBattle = () => {
    if (characters.length < 2) {
      setBattleResult('Please add at least two characters to battle.');
    } else {
      const randomIndex1 = Math.floor(Math.random() * characters.length);
      let randomIndex2 = Math.floor(Math.random() * characters.length);
      while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * characters.length);
      }
      const character1 = characters[randomIndex1];
      const character2 = characters[randomIndex2];
      const winner = character1.power > character2.power ? character1 : character2;
      setBattleResult(`${winner.name} wins the battle!`);
    }
  };

  return (
    <div>
      <h2>Character Battle</h2>
      <button onClick={handleBattle}>Start Battle</button>
      <p>{battleResult}</p>
    </div>
  );
};

export default CharacterBattle;
