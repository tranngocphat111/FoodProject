import data from "../data";
import Meal from "./Meal";

export default function Meals() {
  return (
    <>
      <h1 className="text-[42px]  font-extrabold text-left text-primary_yellow relative uppercase">
        <span className="relative z-10 drop-shadow-lg">Danh sách bán chạy</span>
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary_yellow rounded-full shadow-md"></span>
      </h1>

      <section className="py-5 ">
        <div className="w-[80%] p-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {data.map((meal, index) => {
              if (index < 6) {
                return <Meal key={meal.id} meal={meal} />;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
