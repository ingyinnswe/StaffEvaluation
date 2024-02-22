import React, { useContext , useState} from 'react';
import { TokenContext } from '../App';

const AdminUpdateProfile = () => {
    const {token} = useContext(TokenContext);
    const API_URL = import.meta.env.VITE_API_URL;
    const [successMessage, setSuccessMessage] = useState('');


    const handleProfileUpdate = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        try {
            const response = await fetch(`${API_URL}/api/admin/update-profile`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
            });

            const jsonData = await response.json();
            setSuccessMessage(jsonData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleProfileUpdate} className="flex flex-col justify-center m-10">
                <input type="number" name="username" placeholder="Username(id)" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 m-3"/>
                <input type="file" name="profilePicture" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 m-3"/>
                <button type="submit" className='flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-3'>Update profile</button>
            </form>
            <button className='flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-3' onClick={() => window.history.back()}>Back</button>
            <p>{successMessage}</p>
        </div>
        </div>
    )
}
export default AdminUpdateProfile;