import React from "react";

const Paginations = ({ paginateLinks, setCurrentPage }) => {
  return (
    <div>
      {[...Array(paginateLinks).keys()].map((key) => {
        return (
          <button
            onClick={() => {
              setCurrentPage(key + 1);
            }}
          >
            {key + 1}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default Paginations;
