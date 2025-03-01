import React from "react";
//third component
const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
    
    
        onChange={(e) => setSearchTitle(e.target.value)}
      />
    </div>
  );
};

export default Filter;