import React from "react";

const Stat = ({ stat }) => {
  const { total } = stat;
  return (
    <div>
        {total}
    </div>
  );
};

export default Stat;
