import React, { useState, useContext, useEffect} from 'react';
import { TokenContext } from '../App';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/ric-logo.png';

function AdminLogin() {
  const [loading, isLoading] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useContext(TokenContext);
  const API_URL = import.meta.env.VITE_API_URL;
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
        isLoading(true);
        e.preventDefault();
        const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      const { message, token } = data;
      setToken(token);
      console.log(message);
      navigate('/admin/control');
    } catch (error) {
      console.error('Error:', error);
    } finally{
        isLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-36 w-auto logo"
          src={logo}
          alt="RIC logo"></img>
      <form onSubmit={handleLogin} className="flex flex-col justify-center m-10">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <br />
        <button type="submit" className="flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      <br />
    </div>
    </div>
  );
}

export default AdminLogin;
