"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { ExpensePieChartProps } from "@/types/dashboard";

// কাস্টম টুলটিপ (দেখতে সুন্দর করার জন্য)
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-sm font-semibold text-gray-900">{`${payload[0].name}`}</p>
        <p className="text-sm font-bold text-blue-600">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const ExpensePieChart = ({
  data,
  title = "Expense Breakdown",
}: ExpensePieChartProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md h-[400px] flex flex-col">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>

      {/* ResponsiveContainer চার্টকে সব স্ক্রিনে ফিট করতে সাহায্য করে */}
      <div className="w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%" // অনুভূমিক কেন্দ্র
              cy="50%" // উল্লম্ব কেন্দ্র
              innerRadius={70} // এটি একটি Donut Chart তৈরি করে (বেশি প্রফেশনাল দেখায়)
              outerRadius={100} // বাইরের ব্যাসার্ধ
              paddingAngle={5} // স্লাইসগুলোর মধ্যে গ্যাপ
              dataKey="value"
              nameKey="name"
              cornerRadius={8} // স্লাইসের কোণাগুলো গোল করার জন্য
              isAnimationActive={true} // সুন্দর এনিমেশনের জন্য
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color} // প্রতিটি ক্যাটাগরির নিজস্ব রঙ
                  stroke="none" // বাইরের বর্ডার সরিয়ে ফেলা হয়েছে
                />
              ))}
            </Pie>

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />

            <Legend
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingTop: "20px" }}
              formatter={(value, entry) => (
                <span className="text-sm text-gray-600 ml-2 font-medium">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensePieChart;
