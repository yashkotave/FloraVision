import React from "react";
import bg from "../assets/Rectangle 7.png";
import mushroom from "../assets/mushroom.png";
import newgamla from "../assets/newgamla.png";
import F3 from "./F3";
const F2 = () => {
return (
<div>
<h1 className="text-center text-white text-3xl font-bold pt-16">Our Trendy Plants</h1>


<div className="w-full mt-16 bg-center bg-no-repeat bg-contain flex relative" style={{ backgroundImage: `url(${bg})`, height: "350px" }}>
<div className="w-[40%] h-full flex items-center justify-center relative overflow-visible">
<img src={mushroom} className="w-[85%] h-auto absolute left-[140px] top-[-170px]" />
</div>


<div className="w-[60%] h-full flex items-center px-8 text-white">
<div>
<h2 className="text-2xl font-bold mb-2">For Your Desk Decoration</h2>
<p className="text-lg leading-relaxed">Adding plants made a positive difference!</p>
<h2 className="text-2xl font-bold mb-4">Rs. 599/-</h2>


<div className="flex gap-4 mt-3">
<button className="border-white border-2 px-6 py-2 rounded">Explore</button>
<button className="border-white border-2 px-3 py-2 rounded">👜</button>
</div>
</div>
</div>
</div>


<div className="w-full mt-16 bg-center bg-no-repeat bg-contain flex relative" style={{ backgroundImage: `url(${bg})`, height: "350px" }}>
<div className="w-[60%] h-full flex items-center px-8 text-white">
<div className="max-w-[90%]">
<h2 className="text-2xl font-bold mb-2">For Your Desk Decoration</h2>
<p className="text-lg leading-relaxed">These plants brighten your workspace.</p>
<h2 className="text-2xl font-bold mb-4">Rs. 599/-</h2>


<div className="flex gap-4 mt-3">
<button className="border-white border-2 px-6 py-2 rounded">Explore</button>
<button className="border-white border-2 px-3 py-2 rounded">👜</button>
</div>
</div>
</div>


<div className="w-[40%] h-full flex items-center justify-center relative overflow-visible">
<img src={newgamla} className="w-[85%] h-auto absolute right-[140px] top-[-150px]" />
</div>
</div>


<F3 />
</div>
);
};
export default F2;