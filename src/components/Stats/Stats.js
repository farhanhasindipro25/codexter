import React from "react";
import { useLoaderData } from "react-router-dom";
import TotalQuestionsChart from "../TotalQuestionsChart/TotalQuestionsChart";

const Stats = () => {
  const stats = useLoaderData();
  console.log(stats);

  return (
    <div>
      {stats.data.map((item) => (
        <TotalQuestionsChart key={item.id} item={item}></TotalQuestionsChart>
      ))}
    </div>
  );
};

export default Stats;
