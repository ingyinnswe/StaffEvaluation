import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";

const AdminControl = () => {
  let navigate = useNavigate();
  const { token } = useContext(TokenContext);
    const [returnData, setReturnData] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;
    const handleGetUsers = async () => {
        try {
            console.log(API_URL);
            const response = await fetch(`${API_URL}/api/admin/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
        
            const data = await response.json();
            setReturnData(data);
            
            console.log("data",data);
        } catch (error) {
            console.error("Error:", error);
        }
    }
  const handleCreateUserClick = () => {
    navigate("/admin/control/create");
  };
  const handleGetUserClick = () => {
    navigate("/admin/control/get");
  };
  const handleUpdateProfileClick = () => {
    navigate("/admin/control/update");
  };
  return (
    <>
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <WelcomeBanner />
          <div className="grid grid-cols-12 gap-6">
            <DashboardCard05 />
            <DashboardCard04 />
          </div>

          <div className="flex flex-auto flex-row-reverse flex-wrap">
            <button
              className="mx-2 flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleCreateUserClick}
            >
              Create User
            </button>
            <button
              className="mx-2 flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleGetUsers}
            >
              Get User
            </button>
            <button
              className="mx-2 flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleUpdateProfileClick}
            >
              Update Profile
            </button>
          </div>
          <div className="flex flex-auto my-8">
            {returnData ? (
            <table className="w-full">
              <thead>
                <tr className="border text-indigo-600">
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Variable</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(returnData).map((userId) => (
                    <tr key={userId}>
                    <td>{userId}</td>
                    <td>{returnData[userId].username}</td>
                    <td>{returnData[userId].name}</td>
                    {/* <td>{returnData[userId].votedFor.username}</td> */}
                    </tr>
                ))}
              </tbody>
            </table>
            ) : (
                "Loading..."
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminControl;
