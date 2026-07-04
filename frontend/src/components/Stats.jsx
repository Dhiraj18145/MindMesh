import {
FaLightbulb,
FaHeart,
FaUsers,
FaRocket
} from "react-icons/fa";

function Stats(){

const stats=[
{
icon:<FaLightbulb/>,
number:"5,000+",
label:"Ideas Shared"
},
{
icon:<FaUsers/>,
number:"2,000+",
label:"Active Users"
},
{
icon:<FaHeart/>,
number:"20K+",
label:"Likes"
},
{
icon:<FaRocket/>,
number:"500+",
label:"Projects Built"
},
];

return(

<section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-4 gap-10">

{stats.map((stat,index)=>(

<div
key={index}
className="text-center"
>

<div className="text-5xl mb-5 flex justify-center">

{stat.icon}

</div>

<h2 className="text-5xl font-bold">

{stat.number}

</h2>

<p className="mt-4 text-lg opacity-90">

{stat.label}

</p>

</div>

))}

</div>

</div>

</section>

);

}

export default Stats;
