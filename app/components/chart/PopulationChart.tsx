"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const RenderLineChart = ({
  data,
}: {
  data: {
    year: string;
    value: number;
  }[];
}) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="year" />
      <YAxis />
    </LineChart>
  );
};
