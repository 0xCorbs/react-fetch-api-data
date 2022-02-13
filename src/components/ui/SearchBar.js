import React from "react";

const SearchBar = ({ setFilterData, placeholder }) => {
  return (
    <div>
      <form
        className="d-flex justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="form-control border-bottom searchInput"
          placeholder={placeholder}
          onChange={(e) => setFilterData(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
