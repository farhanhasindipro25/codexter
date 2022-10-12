import React from "react";
import { useLoaderData } from "react-router-dom";
import Stat from "../Stat/Stat";

const Stats = () => {
  const stats = useLoaderData();
  console.log(stats);
  return (
    <div>
      {stats.map((stat) => (
        <Stat key={stats.id} stat={stat}></Stat>
      ))}
    </div>
  );
};

export default Stats;
