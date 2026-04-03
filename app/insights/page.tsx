"use client";

import InsightsPage from "@/components/dashboard/TableRows/Insight/insightRow";
import React from "react";
// ১. আপনার তৈরি করা মেইন ইনসাইটস কম্পোনেন্টটি এখানে থাকবে
// যদি আপনি আলাদা ফাইলে সেভ করে থাকেন তবে import Insights from "@/components/Insights"; লিখুন

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* পেজের কন্টেইনার */}
      <div className="p-4 md:p-6 lg:p-8">
        {/* ২. এখানে আপনার ইনসাইটস সেকশনটি কল করুন */}
        <InsightsPage />

        {/* ভবিষ্যতে এখানে আরও রিপোর্ট বা চার্ট যোগ করতে পারবেন */}
      </div>
    </div>
  );
};

export default Page;
