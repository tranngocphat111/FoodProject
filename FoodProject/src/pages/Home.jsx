import Introduct from "../components/Introduct";
import Meals from "../components/Meals";
import { data } from "../data";
import Highlights from "../components/Highlights";
import BestSeller from "../components/BestSeller";
import TopReviews from "../components/TopReviews";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-col items-center ">
        <Introduct />
        <Meals meals={data} max={6} isTitle={true}/>
      </div>
      <Highlights />
      <BestSeller />
      <TopReviews />
    </div>
  );
}
