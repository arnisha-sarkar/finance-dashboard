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

// কাস্টম টুলটিপ (ডার্ক মোড এনাবল করা হয়েছে)
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card-bg p-4 rounded-xl shadow-lg border border-border-custom">
        <p className="text-sm font-semibold text-foreground">{`${payload[0].name}`}</p>
        <p className="text-sm font-bold text-blue-500">
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
    /* bg-card-bg এবং text-foreground ব্যবহার করা হয়েছে */
    <div className="w-full bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm transition-all hover:shadow-md h-[400px] flex flex-col duration-300">
      <h3 className="text-lg font-bold text-foreground mb-2 uppercase italic tracking-tight">
        {title}
      </h3>

      <div className="w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
              cornerRadius={8}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  /* স্লাইসগুলোর মাঝখানের বর্ডার ডার্ক ব্যাকগ্রাউন্ডের সাথে মিলবে */
                  stroke="var(--card-bg)"
                  strokeWidth={2}
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
              formatter={(value) => (
                /* লেজেন্ডের টেক্সট কালার ডার্ক মোডে অ্যাডজাস্ট হবে */
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2 font-medium">
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
