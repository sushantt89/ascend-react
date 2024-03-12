import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import TableGrouping from "../../Components/Tables/TableGrouping";
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location =useLocation();
  return (
    <main className="px-2 md:px-6 py-4">
      <div className="md:flex gap-5 w-full">
        <ProfileCard />
        <div id="main-dashboard" className="basis-4/5 md:order-1 mt-4 sm:mt-0">
          <Navbar />
          <TableGrouping />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
