import React from 'react';

const Radio = ({ pergunta, options, resposta, id, value, onChange, active }) => {
  if (!active) return null

  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            checked={value === option}
            value={option}
            onChange={onChange}
            className={id}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
