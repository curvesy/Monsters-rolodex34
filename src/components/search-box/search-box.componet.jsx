import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handelChenge }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handelChenge}
  />
);
