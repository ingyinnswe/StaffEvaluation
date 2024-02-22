import React from 'react';
import infoData from './infoData';
import Info from './UserProfileCard';

const Home = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="gap-8 columns-4 mx-auto my-20 text-center">
      {infoData.map((info, index) => (
        <Info
          key={index}
          imageURL={info.imageURL}
          // name={info.name}
          // nickname={info.nickname}
          // jobTitle={info.jobTitle}
        />
      ))}
      </div>
    </div>
  )
}

export default Home