import React, { useContext, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "@/partials/dashboard/DashboardCard06";
import useTotalRatings from "./useTotalRating";

const AdminControl = () => {
  let navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const [returnData, setReturnData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(()=>{
    const getAllUsers = async () => {
      try {
            const response = await fetch(`${API_URL}/api/admin/users`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            const data = await response.json();
            setReturnData(data);
          } catch (error) {
            console.error("Error:", error);
          }
    };
    getAllUsers();
  },[]);
  const totalRatings = useTotalRatings(returnData);

  useEffect(() => {
    console.log("Total Ratings:", totalRatings);
  }, [totalRatings]);
  //for the purpose of checking total ratings. must be removed
  
  const handleCreateUserClick = () => {
    navigate("/admin/control/create");
  };
  //   const handleGetUserClick = () => {
  //     navigate("/admin/control/get");
  //   };
  const handleDeleteUserClick = async (username) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/users/${username}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        // Delete user from returnData
        const updatedData = { ...returnData };
        // Assuming each user has a unique username
        const userIdToDelete = Object.keys(updatedData).find(
          (key) => updatedData[key].username === username
        );
        delete updatedData[userIdToDelete];
        setReturnData(updatedData);
        console.log("User deleted successfully");
      } else {
        const errorData = await response.json(); // Assuming server returns JSON error messages
        console.error("Failed to delete user. Server error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
            <DashboardCard06 />
            <DashboardCard04 />
          </div>

          <div className="flex flex-auto flex-row-reverse flex-wrap">
            <button
              className="mx-2 flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleCreateUserClick}
            >
              Create User
            </button>
            {/*<button
              className="mx-2 flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleGetUsers}
            >
              Get User
  </button>*/}
            <button
              className="mx-2 flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleUpdateProfileClick}
            >
              Update Profile
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8">
            {returnData ? (
              <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="border text-indigo-600">
                    <th scope="col" className="px-6 py-3">
                      User ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Euphoric
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Innovative
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Counterbalance
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Supervision
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Self-motivations
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className=" border">
                  {Object.keys(returnData).map((userId) => (
                    <tr
                      key={userId}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 "
                    >
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {userId}
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {returnData[userId].username}
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {returnData[userId].name}
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      ></td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      ></td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      ></td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      ></td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      ></td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <button className="p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-oragne-800"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </button>
                        {/* <button className="p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-green-800"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button> */}
                        <button onClick={handleDeleteUserClick} className="p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-red-700"
                            id="delete"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                      {/* <td>{returnData[userId].votedFor.username}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-4">
                No data to display
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminControl;
