import React from "react";

const SearchIcon = ({text}) => {
  return (
    <div className="flex items-center cursor-pointer">
      <svg
      
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
        strokeWidth="2"
      >
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
      {text}
    </div>
  );
};

export default SearchIcon;
