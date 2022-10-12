import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const stats = useLoaderData();
  console.log(stats);

  // stats.data.map((item) => console.log(item));

  const data = [
    {
      name: stats.data[0].name,
      total: stats.data[0].total,
    },
    {
      name: stats.data[1].name,
      total: stats.data[1].total,
    },
    {
      name: stats.data[2].name,
      total: stats.data[2].total,
    },
    {
      name: stats.data[3].name,
      total: stats.data[3].total,
    },
  ];

  return (
    <div className="container mx-auto pb-96 mt-36">
      <ResponsiveContainer className="mx-auto" width="80%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
