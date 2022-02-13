import React from "react";

const AddTagBar = ({ getTagData }) => {
  return (
    <div>
      <form
        className="d-flex "
        onSubmit={(e) => {
          e.preventDefault();
          e.target[0].value = "";
        }}
      >
        <input
          type="text"
          className="form-control border-bottom tagInput"
          placeholder="Add a tag"
          onKeyPress={(e) => getTagData(e.key, e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTagBar;
