import React from "react";

const FilterInput = ({ setFilter, filter }) => (
  <div>
    <input onChange={(e) => setFilter(e.target.value)} value={filter} />
  </div>
);

export default FilterInput;
