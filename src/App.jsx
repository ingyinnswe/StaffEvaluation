import React from "react";
import Info from "./pages/Info";

function App() {
  return (
    <main className="md:container md:mx-auto">
      <div className="gap-8 columns-4 mx-auto my-20">
        <Info
          className="w-full"
          imageURL= "/src/assets/Profile/image-1.jpg"
          name="Dr. Kritsada Sriphaew"
          nickname="Aj.Kong"
          jobTitle="Asst.Prof & Dean of the RIC"
        ></Info>
        <Info
          className="w-full"
          imageURL= "/src/assets/Profile/image-2.jpg"
          name="Prinda Setabundhu"
          nickname="Aj.Pap"
          jobTitle="Associate Dean for Student Affairs"
        ></Info>
        <Info
          className="w-full"
          imageURL= "/src/assets/Profile/image-3.jpg"
          name="Amporn Puapradit"
          nickname="Aj.Amporn"
          jobTitle="Associate Dean for Academic Affairs"
        ></Info>
        <Info
          className="w-full"
          imageURL= "/src/assets/Profile/image-4.jpg"
          name="Malisuwan Ussanee"
          nickname="Aj.Koy"
          jobTitle="Associate Dean for Administration"
          ></Info>
        
        
      </div>
    </main>
  );
}

export default App;
