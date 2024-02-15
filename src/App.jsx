import React from "react";
import Info from "./pages/Info";
import infoData from "./pages/infoData";

function App() {
  return (
    <main className="md:container md:mx-auto">
      <div className="gap-8 columns-4 mx-auto my-20">
      {infoData.map((info, index) => (
        <Info
          key={index}
          imageURL={info.imageURL}
          name={info.name}
          nickname={info.nickname}
          jobTitle={info.jobTitle}
        />
      ))}
      </div>
    </main>
  );
}

export default App;
