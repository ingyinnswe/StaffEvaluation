import React, { useContext ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../App';

const AdminControl = () => {
  let navigate = useNavigate();
  const {token} = useContext(TokenContext);
  const handleCreateUserClick = () => {
    navigate('/admin/control/create');
  }

  const handleGetUserClick = () => {
    navigate('/admin/control/get');
  }

  const handleUpdateProfileClick = () => {
    navigate('/admin/control/update');
  }
    

    return(
        <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center m-10">
            <button className="flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleCreateUserClick}>Create User</button>
            <button className="flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleGetUserClick}>Get User</button>
            <button className="flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleUpdateProfileClick}>Update Profile</button>
        </div>
        </div>
    )
}
export default AdminControl;