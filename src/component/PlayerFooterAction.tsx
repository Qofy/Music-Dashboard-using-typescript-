import { 
  Repeat, 
  Download, 
  Heart, 
  Share2, 
  ListMusic, 
  SquarePlus 
} from "lucide-react";

export function PlayerFooterAction(){
  return(
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
  )
}
