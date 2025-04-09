import { PlayerFooterAction } from "./PlayerFooterAction";
import { PlayerFooterControl } from "./PlayerFooterControl";
import { PlayerFooterProgress } from "./PlayerFooterProgress";
import "../scss/component/footer.scss"
const ml7= "https://source.boomplaymusic.com/group10/M00/11/06/dee2c936b3104e18b368cc2498a6d42dH1080W1080_464_464.webp";

export function Footer() {
  return (
    <footer className="player-footer">
      <div className="player-footer__artwork">
        <img src={ml7} alt="Album artwork" className="player-footer__image" />
        <h3 style={{textTransform:"capitalize"}}>
          kojoblack
        </h3>
      </div>
      
      <PlayerFooterControl/>
      <PlayerFooterAction/>
      <PlayerFooterProgress/>
    </footer>
  );
}





