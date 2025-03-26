import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const PieChartTab = ({ progressingDevices, updatedDevices }: { progressingDevices: number; updatedDevices: number }) => {
  const data = [
    { name: "Progressing Devices", value: progressingDevices },
    { name: "Updated Devices", value: updatedDevices },
  ];

  const COLORS = ["#FF6384", "#36A2EB"];

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartTab;