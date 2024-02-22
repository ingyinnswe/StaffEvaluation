import React, { useContext, useState } from 'react';
import { TokenContext } from '../App';

const AdminGet = () => {
    const { token } = useContext(TokenContext);
    const [returnData, setReturnData] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;
    const handleGetUsers = async () => {
        try {
            console.log(API_URL)
            console.log("loading")
          const response = await fetch(`${API_URL}/api/admin/users`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
    
          const data = await response.json();
          setReturnData(data);
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return(
        <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <p>{returnData ? JSON.stringify(returnData, null, 2) : 'Loading...'}</p>
            </div>
            <button type="button" onClick={handleGetUsers} className='flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-3'>
            Get All Users
            </button>
            <div>
              <button className='flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-3' onClick={() => window.history.back()}>Back</button> 
            </div>
        </div>
        </div>
    )
}

export default AdminGet;
