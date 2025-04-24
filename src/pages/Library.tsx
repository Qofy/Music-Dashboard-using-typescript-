import "../scss/pages/library.scss"

export function Library (){
  return(
    <div className="library-container">
      <h2>Library</h2>
      <div className="library__head">
        <div className="library__btns">
        <button></button>
        <button></button>
        <button></button>
        </div>
        <p className="sort">Sort by Name</p>
      </div>
    </div>
  )
}