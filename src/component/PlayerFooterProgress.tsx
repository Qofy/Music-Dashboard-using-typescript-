
export function PlayerFooterProgress(){
  return(
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
  )
}