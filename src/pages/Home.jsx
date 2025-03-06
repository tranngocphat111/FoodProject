import Introduct from "../components/Introduct";
import Meals from "../components/Meals";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-col items-center ">
        <Introduct />
        <Meals />
      </div>
    </div>
  );
}
