import { NewRelease } from "../component/NewRelease";
import { Slider } from "../component/Slider";


export function MiddleSide() {

  return (
    <div className="middle-side">
      <Slider/>
      <NewRelease/>
    </div>
  );
}

