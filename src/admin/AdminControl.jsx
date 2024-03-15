import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Datepicker from "../components/Datepicker";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import Banner from "../partials/Banner";
import Admin from "./Admin";

const AdminControl = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let navigate = useNavigate();
  const { token } = useContext(TokenContext);
  // const handleCreateUserClick = () => {
  //   navigate("/admin/control/create");
  // };
  // const handleGetUserClick = () => {
  //   navigate("/admin/control/get");
  // };
  // const handleUpdateProfileClick = () => {
  //   navigate("/admin/control/update");
  // };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Banner />
          {/* Content */}
          <Admin />
        </div>
      </div>
    </>
  );
};

export default AdminControl;
