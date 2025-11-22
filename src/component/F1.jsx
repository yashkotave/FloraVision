import React from "react";
import {
  HamburgerIcon,
  Home,
  HomeIcon,
  MoveRight,
  PlayIcon,
  SearchIcon,
  Share,
} from "lucide-react";
import Navbar from "./Navbar";
import F2 from "./F2";

const F1 = () => {
  return (
    <div
      className="bg-[#1C2419] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/ped.jpg')",
        height: "2000px",
      }}
    >
      <Navbar />

      <div className="flex w-full h-[80vh]">
        {/* === LEFT TEXT SECTION === */}
        <div className="w-1/2 text-white justify-center p-4 flex flex-col pt-24">
          <h1 className="text-8xl font-bold">Earth's Exhale</h1>
          <p className="text-1xl">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>

          <div className="flex gap-2 mt-4">
            <button className="px-8 py-2 border-2 border-white rounded">
              Buy Now
            </button>

            <div className="flex items-center gap-3">
              <div className="border-2 border-white rounded-full p-2 flex items-center justify-center">
                <PlayIcon size={20} />
              </div>
              <h6 className="font-mono">Live Demo</h6>
            </div>
          </div>
        
    <div
  className="bg-no-repeat mt-16 p-4 rounded-3xl text-white"
  style={{
    backgroundImage: "url('/src/assets/Rectangle 15.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "15px",
    width:"450px",
  }}
>

  {/* Profile + Name + Rating */}
  <div className="flex items-center gap-4">
    
    {/* Profile Image */}
    <img
      src="/src/assets/profile.png"
      alt="profile"
      className="w-16 h-16 rounded-full object-cover"
    />

    {/* Name & Stars */}
    <div className="flex flex-col">
      <h3 className="text-white text-xl font-semibold">John Doe</h3>

      <div className="flex text-yellow-400 text-lg">
        ★★★★★
      </div>
    </div>
  </div>

  {/* Review Text */}
  <div className="mt-4">
    <p>
      I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
    </p>
  </div>

</div>


        </div>

        {/* === RIGHT IMAGE + TEXT CARD === */}
        <div className="w-1/2 flex items-center justify-end mr-8 mt-16">
          <div
            className="relative bg-no-repeat bg-center bg-cover rounded-xl p-6 flex flex-col items-start justify-start text-left"
            style={{
              backgroundImage: "url('/src/assets/Rectangle 14.png')",
              width: "390px",
              height: "475px",
            }}
          >
            {/* Top Image */}
            <img
              src="/src/assets/upargamla.png"
              alt="Indoor Plant"
              className="w-[250px] h-auto self-center"
            />

            {/* Text */}
            <h1 className="text-white text-xl font-bold mt-4">
              Indoor Plant
            </h1>

            {/* Aglaonema + MoveRight */}
            <div className="flex items-center gap-24 mb-4">
              <h2 className="text-white text-3xl font-semibold whitespace-nowrap">
                Aglaonema Plant
              </h2>
              <MoveRight className="text-white" size={24} />
            </div>

            {/* Button */}
            <button className="px-8 py-2 border-2 border-white rounded text-white">
              Buy Now
            </button>
          </div>
        </div>

      </div>


     <F2 />
    </div>
  );
};

export default F1;
