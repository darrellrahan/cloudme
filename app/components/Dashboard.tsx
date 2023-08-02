import React from "react";
import Title from "./Title";
import QuickAccess from "./QuickAccess";
import MonthlyReport from "./MonthlyReport";
import RecentFiles from "./RecentFiles";

function Dashboard() {
  return (
    <section id="dashboard">
      <div className="space-y-8">
        <Title page="Dashboard" />
        <QuickAccess />
        <MonthlyReport />
        <RecentFiles />
      </div>
    </section>
  );
}

export default Dashboard;
