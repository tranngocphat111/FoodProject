export default function Meal({ meal }) {
  return (
    <div className="bg-[#1d1a16] shadow-lg rounded-2xl overflow-hidden cus max-w-sm mx-auto transform transition duration-300 cursor-pointer hover:scale-105 hover:shadow-[#ffc404]"> 
      <img
        src={`/public/images/meals/${meal.image}`}
        alt={meal.id}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 text-stone-300 text-center">
        <h3 className="text-xl font-bold">{meal.name}</h3>
        <p className="inline-block text-[18px]  bg-primary_linear text-primary_yellow font-bold px-8 py-2 m-3 rounded-md ">
          ${meal.price}
        </p>

        <p className="text-stone-200 text-[14px] mt-2">{meal.description}</p>
        <button className="px-8 py-2 my-2 bg-[#ffc404] text-[#312c1d] font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-[#312c1d] hover:shadow-xl">
          Chi tiết
        </button>
      </div>
    </div>
  );
}
