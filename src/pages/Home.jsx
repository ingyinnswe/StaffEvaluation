import React, {useContext, useEffect, useState} from 'react';
// import infoData from './infoData';
import Info from './UserProfileCard';
// import { UserIdContext, UserDataContext} from '@/App';

const Home = () => {
  // const { userId } = useContext(UserIdContext);
  // const { userData, setUserData } = useContext(UserDataContext);
  // const API_URL = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`${API_URL}/api/users/${userId}`);
  //     const data = await response.json();
  //     setUserData(data);
  //   };
  //   if (userId) {
  //     fetchData();
  //   }
  // }, [userId, API_URL]);

  return (
    <div className="md:container md:mx-auto">
      <div className="grid grid-cols-5 gap-8 my-16 text-center justify-center">    
      <Info
      />
      </div>
    </div>
  )
}

export default Home