import React, { useContext, useEffect, useState } from "react";
import infoData from "./infoData";
import Popup from "./Popup";
import { UserIdContext, UserDataContext } from "@/App";

const UserProfileCard = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { userId } = useContext(UserIdContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const [ motivationVariable, setMotivationVariable ] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleClick = (id) => {
    setSelectedUser(selectedUser === id ? null : id);
  };

  const openPopup = (value) => {
    setShowPopup(true);
    setMotivationVariable(value);
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
                onClick={()=>openPopup('Supervision')}
                type="button"
                className="text-gray-900 bg-pink-200 hover:text-white hover:bg-pink-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
              >
                Supervision
              </a>
              <a
                onClick={()=>openPopup('Counter Balance')}
                type="button"
                className="text-gray-900 bg-blue-200 hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
              >
                Counter Balance
              </a>
              {showPopup && (
                <Popup
                  votedFor={info._id}
                  imageURL={info.profilePicture}
                  name={info.name}
                  jobTitle={info.jobTitle}
                  nickname={info.nickname}
                  variable={motivationVariable}
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
