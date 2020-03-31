import React from "react";

export function Pokemon({ pokemon }) {
  const { name, image, attacks } = pokemon;
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{name}</p>
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image">
        <img src={image} alt={`Pokemon: ${name}`} />
      </div>
      <div className="pokemon__attacks">
        {attacks.special.slice(0.3).map((attack, index) => (
          <span key={`${index}-${attack.name}-${attack.damage}`}>
            {index} - Attack: {attack.name} - {attack.damage}`
          </span>
        ))}
      </div>
    </div>
  );
}
