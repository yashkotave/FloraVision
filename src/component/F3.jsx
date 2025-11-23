import vector5 from "../assets/Vector5.png"
import vector6 from "../assets/Vector6.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import g28 from "../assets/g28.png";
import g30 from "../assets/g30.png";
import g33 from "../assets/g33.png";


const F3 = () => {
return (
<div className="w-full bg-[#161E13] flex flex-col items-center py-20 mt-16">
<div className="relative flex justify-center items-center w-full mb-16">
<img src={vector5} className="absolute left-20 w-10" />
<h1 className="capitalize text-3xl text-white text-center">our top selling plants</h1>
<img src={vector6} className="absolute right-20 w-10" />
</div>


<div className="flex w-full px-10 gap-6">
<img src={a1} className="w-1/3 rounded-lg" />
<img src={a2} className="w-1/3 rounded-lg" />
<img src={a3} className="w-1/3 rounded-lg" />
</div>


<div className="flex w-full px-10 gap-6 mt-10">
<img src={a5} className="w-1/3 rounded-lg" />
<img src={a6} className="w-1/3 rounded-lg" />
<img src={a3} className="w-1/3 rounded-lg" />
</div>


<div className="mt-16"><img src={g28} /></div>
<div className="flex justify-center mt-16"><img src={g30} className="w-[80%]" /></div>


<div className="flex gap-4 justify-between w-full mt-16 px-10 text-white">
<div className="w-1/3 flex flex-col text-center">
<img src={g33} className="w-full max-w-[300px] h-auto" />
<p className="text-xl text-left mt-4">
"Our plants are crafted to thrive and elevate your environment."
</p>
</div>


<div className="w-1/3 flex flex-col space-y-2">
<h1 className="text-3xl font-semibold mb-2">Quick Links</h1>
<button className="text-lg hover:underline text-left">Type of plants</button>
<button className="text-lg hover:underline text-left">Contact</button>
<button className="text-lg hover:underline text-left">Privacy</button>
</div>


<div className="w-1/3 flex flex-col space-y-3">
<h1 className="text-2xl font-semibold">For Every Update</h1>
<div className="flex border border-white rounded overflow-hidden">
<input className="flex-1 px-3 py-2 bg-transparent text-white outline-none placeholder-gray-300" placeholder="Enter Email" />
<button className="bg-white text-black px-4 py-2 font-semibold">Subscribe</button>
</div>
</div>
</div>
</div>
);
};
export default F3;