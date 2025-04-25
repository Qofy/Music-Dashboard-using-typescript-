import "../scss/pages/library.scss"

const libraryHeadStyl= {
  display: "flex",
  justifyContent:"space-between",
  marginTop:"2rem",
  alignItems: "center"
}
const subConStyl = {
  marginTop:"4.4rem",
  marginBottom: "6rem",
}

export function Library (){
  return(
    <div className="library-container">
      <div className="library-sub__Container" style={subConStyl}>
      <h2 className="library-name">Library</h2>
      <div className="library__head" style={libraryHeadStyl}>
        <div className="library__p">
        <p>Artist</p>
        <p>Album</p>
        <p>Songs</p>
        </div>
        <p className="sort">Sort by Name</p>
      </div>
      </div>
    </div>
  )
}