import React from "react";
import Navbar from "./Navbar";
import F2 from "./F2";


import ped from "../assets/ped.jpg";
import rect15 from "../assets/Rectangle 15.png";
import rect14 from "../assets/Rectangle 14.png";
import profile from "../assets/profile.png";
import upar from "../assets/upargamla.png";


const F1 = () => {
return (
<div
className="bg-[#1C2419] w-full bg-cover bg-center bg-no-repeat"
style={{ backgroundImage: `url(${ped})`, height: "2000px" }}
>
<Navbar />


<div className="flex w-full h-[80vh]">
<div className="w-1/2 text-white justify-center p-4 flex flex-col pt-24">
<h1 className="text-8xl font-bold">Earth's Exhale</h1>
<p className="text-1xl">
"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment.
</p>


<div className="flex gap-2 mt-4">
<button className="px-8 py-2 border-2 border-white rounded">Buy Now</button>
<div className="flex items-center gap-3">
<div className="border-2 border-white rounded-full p-2 flex items-center justify-center">
<svg width="20" height="20"><circle cx="10" cy="10" r="10" fill="white"/></svg>
</div>
<h6 className="font-mono">Live Demo</h6>
</div>
</div>


<div
className="bg-no-repeat mt-16 p-4 rounded-3xl text-white"
style={{ backgroundImage: `url(${rect15})`, backgroundSize: "cover", backgroundPosition: "center", width: "450px" }}
>
<div className="flex items-center gap-4">
<img src={profile} alt="profile" className="w-16 h-16 rounded-full object-cover" />
<div>
<h3 className="text-xl font-semibold">John Doe</h3>
<div className="text-yellow-400 text-lg">★★★★★</div>
</div>
</div>
<p className="mt-4">I can't express how thrilled I am with my new plants!</p>
</div>
</div>


<div className="w-1/2 flex items-center justify-end mr-8 mt-16">
<div
className="relative bg-no-repeat bg-center bg-cover rounded-xl p-6 flex flex-col items-start text-left"
style={{ backgroundImage: `url(${rect14})`, width: "390px", height: "475px" }}
>
<img src={upar} alt="Indoor Plant" className="w-[250px] h-auto self-center" />
<h1 className="text-white text-xl font-bold mt-4">Indoor Plant</h1>


<div className="flex items-center gap-24 mb-4">
<h2 className="text-white text-3xl font-semibold whitespace-nowrap">Aglaonema Plant</h2>
</div>


<button className="px-8 py-2 border-2 border-white rounded text-white">Buy Now</button>
</div>
</div>
</div>


<F2 />
</div>
);
};
export default F1;