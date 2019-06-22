import React from "react";

function SearchCheckbox({ handleChange, option, isChecked }) {
  return (
    <div className="searchForm__checkbox">
      <input
        id={option}
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
}

export default SearchCheckbox;
