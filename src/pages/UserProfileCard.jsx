import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import infoData from "./infoData";
import Popup from "./Popup";
import { UserIdContext, UserDataContext } from "@/App";

const UserProfileCard = () => {
  const { userId, setUserId } = useContext(UserIdContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const [variable, setVariable] = useState('');
  let navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/api/users/${userId}`);
      const data = await response.json();
      setUserData(data);
    };
    if (userId) {
      fetchData();
    }
  }, [userId, API_URL]);

  useEffect(() => {
    const timer = setTimeout(() => {
      alert('You have been inactive for 10 seconds, redirecting to sign in page');
      navigate('/')
      setUserId(null);
      setUserData(null)
    }, 10000);

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const handleClick = (id) => {
    setSelectedUser(selectedUser === id ? null : id);
  };

  const openPopup = (v) => {
    setVariable(v);
    setShowPopup(true);
    console.log("open popup");
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {userData.map((info, index) => (
        <div
          id={info._id}
          key={index}
          className={`baseCard w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-20
        `}
        >
          <img
            src={info.profilePicture}
            alt={info.name}
            srcSet=""
            className="mx-auto rounded-2xl "
            onClick={() => handleClick(info._id)}
          />
          {/* <div className="px-5 pb-4">
          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
            {props.name}
          </h3>
          <p className="text-sm leading-6 text-gray-400">{props.jobTitle}</p>
          <p className="text-base leading-7 text-gray-800">{props.nickname}</p>
        </div> */}

          {/*  motivations and self-confidence */}
          {selectedUser === info._id && (
            <div
              className={`motivationBtn px-4 transition-all duration-500 max-h-40 opacity-100`}
              id={info._id}
            >
              <a
                onClick={()=>openPopup('Euphoric')}
                type="button"
                className="text-gray-900 bg-green-200 hover:text-white hover:bg-green-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 "
              >
                Euphoric
              </a>
              <a
                onClick={()=>openPopup('Innovative')}
                type="button"
                className="text-gray-900 bg-orange-200 hover:text-white hover:bg-orange-500  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
              >
                Innovative
              </a>
              <a
                onClick={()=> openPopup('Supervision')}
                type="button"
                className="text-gray-900 bg-pink-200 hover:text-white hover:bg-pink-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
              >
                Supervision
              </a>
              <a
                onClick={()=>openPopup('Counterbalance')}
                type="button"
                className="text-gray-900 bg-blue-200 hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
              >
                Counter Balance
              </a>
              {showPopup && (
                <Popup
                  imageURL={info.profilePicture}
                  votedFor={info._id}
                  variable={variable}
                  name={info.name}
                  jobTitle={info.jobTitle}
                  nickname={info.nickname}
                  onClose={handleClosePopup}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default UserProfileCard;
