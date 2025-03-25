import { 
  SkipBack, 
  PlayCircle, 
  PauseCircle, 
  SkipForward, 
  Repeat, 
  Download, 
  Heart, 
  Share2, 
  ListMusic, 
  SquarePlus 
} from "lucide-react";
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
      
      <div className="player-footer__controls">
        <button className="player-footer__control-btn player-footer__control-btn--skip-back">
          <SkipBack className="player-footer__icon" />
        </button>
        <button className="player-footer__control-btn player-footer__control-btn--play">
          <PlayCircle className="player-footer__icon" />
        </button>
        <button className="player-footer__control-btn player-footer__control-btn--pause">
          <PauseCircle className="player-footer__icon" />
        </button>
        <button className="player-footer__control-btn player-footer__control-btn--skip-forward">
          <SkipForward className="player-footer__icon" />
        </button>
      </div>

      <div className="player-footer__actions">
        <button className="player-footer__action-btn player-footer__action-btn--repeat">
          <Repeat className="player-footer__icon" />
        </button>
        <button className="player-footer__action-btn player-footer__action-btn--download">
          <Download className="player-footer__icon" />
        </button>
        <button className="player-footer__action-btn player-footer__action-btn--favorite">
          <Heart className="player-footer__icon" />
        </button>
        <button className="player-footer__action-btn player-footer__action-btn--share">
          <Share2 className="player-footer__icon" />
        </button>
        <button className="player-footer__action-btn player-footer__action-btn--playlist">
          <ListMusic className="player-footer__icon" />
        </button>
        <button className="player-footer__action-btn player-footer__action-btn--add">
          <SquarePlus className="player-footer__icon" />
        </button>
      </div>

      <div className="player-footer__progress">
        <div className="player-footer__time">
          <span className="player-footer__time-current">0:00</span>
          <span className="player-footer__time-divider">/</span>
          <span className="player-footer__time-total">0:00</span>
        </div>
        <div className="player-footer__progress-bar">
          <div className="player-footer__progress-current"></div>
        </div>
      </div>
    </footer>
  );
}
