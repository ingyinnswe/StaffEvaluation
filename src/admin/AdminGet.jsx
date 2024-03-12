import React, { useContext, useState } from "react";
import { TokenContext } from "../App";

const AdminGet = () => {
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
  };
  return (
    <div className="flex  w-full h-screen  justify-center px-6 py-12 lg:px-8">
      <div className="w-full">
        <div>
          {/* <p>{returnData ? JSON.stringify(returnData, null, 2) : 'Loading...'}</p> */}
          {returnData ? (
            <table className="w-full">
              <thead>
                <tr className="border text-blue-600">
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Variable</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody className="">
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
        <button
          type="button"
          onClick={handleGetUsers}
          className="flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-3"
        >
          Get All Users
        </button>
        <div>
          <button
            className="flex justify-center w-auto mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-3"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminGet;
