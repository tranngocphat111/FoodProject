import data from "../data";
import Meal from "./Meal";

export default function Meals() {
  return (
      <section className="py-12 ">
        <div className="w-[80%] p-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {data.map((meal, index) => 
              {
                if(index < 6){
                  return <Meal key={meal.id} meal={meal} />
                }
              }
            )}
          </div>
        </div>
      </section>
  );
}
