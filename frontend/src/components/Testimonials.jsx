function Testimonials(){

const reviews=[

{
name:"Rahul",
text:"MindMesh helped me organize all my startup ideas beautifully."
},

{
name:"Priya",
text:"The UI is clean and collaboration is effortless."
},

{
name:"Aman",
text:"One of the best idea management platforms I've used."
}

];

return(

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

Loved by Innovators

</h2>

<div className="grid md:grid-cols-3 gap-10 mt-16">

{reviews.map((review,index)=>(

<div
key={index}
className="bg-white rounded-3xl shadow-lg p-8"
>

<div className="text-yellow-400 text-2xl">

★★★★★

</div>

<p className="text-gray-600 mt-6 leading-8">

"{review.text}"

</p>

<h3 className="font-bold text-xl mt-8">

{review.name}

</h3>

</div>

))}

</div>

</div>

</section>

);

}

export default Testimonials;