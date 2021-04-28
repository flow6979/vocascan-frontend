import React from "react";

import "./ProgressBar.scss";

const ProgressBar = ({
  showPercentage = false,
  value = 0,
  min = 0,
  max = 100,
  round = true,
  bottomText = null,
}) => {
  return (
    <div className="progress-bar">
      <div
        className="wrapper"
        style={{
          width: `${round ? (value % max).toFixed(0) : value % max}%`,
        }}
      >
        {showPercentage && (
          <span className="percentage">{`${
            round ? value.toFixed(0) : value
          }%`}</span>
        )}
      </div>
      {bottomText && (
        <div className="bottom-text">
          <span>{bottomText}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
