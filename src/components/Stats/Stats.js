import React from "react";

const Stats = ({ topic }) => {
  const { total } = topic;
  return (
    <div>
      <h2>Stats component: {total}</h2>
    </div>
  );
};

export default Stats;
