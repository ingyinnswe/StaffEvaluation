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
      <div className="gap-8 flex flex-wrap my-20 text-center justify-center">
      {/* {userData.map((user, index) => (
        <Info
          key={index}
          imageURL={user.profilePicture}
          // name={info.name}
          // nickname={info.nickname}
          // jobTitle={info.jobTitle}
        />
      ))} */}
      
      <Info
      />
      </div>
    </div>
  )
}

export default Home