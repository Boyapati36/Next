// components/Character.tsx
import React from 'react';

interface CharacterProps {
  character: {
    name: string;
    image: string;
  };
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  return (
    <div className="column">
      <div className="card m-2" style={{ width: '80%', margin: '0 auto' }}>
        <img src={character.image}/>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Character;
