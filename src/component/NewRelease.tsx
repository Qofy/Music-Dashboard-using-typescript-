import { CirclePlay } from "lucide-react";
import R1 from "../images/newRelease/r1.jpg";
import R2 from "../images/newRelease/r2.jpg";
import R3 from "../images/newRelease/r3.png";
import R4 from "../images/newRelease/r4.jpg";
import R5 from "../images/newRelease/r5.webp";
import R6 from "../images/newRelease/r6.jpg";
import R7 from "../images/newRelease/r7.jpg";
import "../scss/component/newRelease.scss";


const Release = [R1, R2, R3, R4, R5, R6, R7];
type ArtistNameProp = {
  artistNames: {
    name: string
  }[]
}
const artistName = [
  {name:"Kuame Eugene"},
  {name:"Kidi"},
  {name:"Yhaw Hero"},
  {name:"Kwesi Amewuga Ft Medikal"},
  {name:"Kwesi Arthur"},
  {name:"StoneBwoy"},
  {name:"Shatta Wale"},
]

export function NewRelease() {
  return (
    <div className="release-wrapper">
      <div className="release">
        <div className="release__header">
          <h3>
            New Release <CirclePlay className="play-icon" />
          </h3>
          <p>See more</p>
        </div>
        <ReleaseContent artistNames={artistName} />
      </div>
    </div>
  );
}


export function ReleaseContent({artistNames}: ArtistNameProp) {
  return (
    <div className="release__content">
      {Release.map((image, index) => (
        <div key={index} className="release__item">
          <div className="image-container">
            <img src={image} alt={`release ${index + 1}`} />
            <div className="overlay">
              <CirclePlay className="play-button" />
            </div>
          </div>
          <p className="release__title">Release {index + 1}</p>
          <p className="release__artist">{artistNames[index].name}</p>
        </div>
      ))}
    </div>
  );
}