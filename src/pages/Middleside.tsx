import { MostLike } from "../component/MostLike";
import { NewRelease } from "../component/NewRelease";
import { Slider } from "../component/Slider";
import "../scss/pages/middle.scss"


export function MiddleSide() {

  return (
    <div className="middle-side">
      <Slider/>
      <NewRelease rName="New Release"/>
      <MostLike/>
    </div>
  );
}

