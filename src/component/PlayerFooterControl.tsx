import {
  SkipBack, 
  PlayCircle, 
  PauseCircle, 
  SkipForward, 
} from "lucide-react";

export function PlayerFooterControl(){
  return(
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
  )
}