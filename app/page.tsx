import SummarySection from "@/components/dashboard/SummarySection";
import { summaryMockData } from "@/data/mockData";
import React from "react";

const Home = () => {
  return <SummarySection data={summaryMockData} />;
};

export default Home;
