import React from 'react';

const Radio = ({ pergunta, id, options, onChange, value, slide }) => {
  if (!slide) return null;

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
