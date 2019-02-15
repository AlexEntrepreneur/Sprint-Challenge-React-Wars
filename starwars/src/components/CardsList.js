import React from 'react';

function CardsList({ cardsData }) {
  return (
    <div className="cards-list-container">
    {
      cardsData.map(character => {
        return (
          <div className="chacter-card" key={character.name}>
            <h2>{ character.name }</h2>
            <p className="character-attr"><b>Born:</b> { character.birth_year }</p>
            <p className="character-attr"><b>Gender:</b> { character.gender }</p>
            <p className="character-attr"><b>Height:</b> { character.height }</p>
            <p className="character-attr"><b>Mass:</b> { character.mass }</p>
            <p className="character-attr"><b>Hair Color:</b> { character.hair_color }</p>
            <p className="character-attr"><b>Eye Color:</b> { character.eye_color }</p>
          </div>
        )
      })
    }
    </div>
  );
}

export default CardsList;
