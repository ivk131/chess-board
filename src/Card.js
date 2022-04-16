import React, { useState } from "react";

function Card({ index }) {
  const [click, setClick] = useState(false);
  const handleBackgroundColor = (index) => setClick(true);

  const setBackgroundColor = (index) => {
    if (index < 8) {
      return index % 2 === 0 ? "#000" : "#fff";
    } else if (index >= 8 && index < 16) {
      return index % 2 === 0 ? "#fff" : "#000";
    } else if (index >= 16 && index < 24) {
      return index % 2 === 0 ? "#000" : "#fff";
    } else if (index >= 24 && index < 32) {
      return index % 2 === 0 ? "#fff" : "#000";
    } else if (index >= 32 && index < 40) {
      return index % 2 === 0 ? "#000" : "#fff";
    } else if (index >= 40 && index < 48) {
      return index % 2 === 0 ? "#fff" : "#000";
    } else if (index >= 48 && index < 56) {
      return index % 2 === 0 ? "#000" : "#fff";
    } else if (55 < index < 64) {
      return index % 2 === 0 ? "#fff" : "#000";
    } else {
      return index % 2 === 0 ? "#000" : "#fff";
    }
  };
  return (
    <div
      onClick={() => handleBackgroundColor(index)}
      className="grid-item"
      key={index}
      style={{
        background: click ? "red" : setBackgroundColor(index),
      }}
    ></div>
  );
}

export default Card;
