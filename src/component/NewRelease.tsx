import { CirclePlay } from "lucide-react";
import R1 from "../images/newRelease/r1.jpg";
import R2 from "../images/newRelease/r2.jpg";
import R3 from "../images/newRelease/r3.png";
import R4 from "../images/newRelease/r4.jpg";
import R5 from "../images/newRelease/r5.webp";
import R6 from "../images/newRelease/r6.jpg";
import R7 from "../images/newRelease/r7.jpg";
import "../scss/component/newRelease.scss";
import { ReactNode } from "react";

const Release = [R1, R2, R3, R4, R5, R6, R7];

const artistName = [
  {name:"Kuame Eugene"},
  {name:"Kidi"},
  {name:"Yhaw Hero"},
  {name:"Kwesi Amewuga Ft Medikal"},
  {name:"Kwesi Arthur"},
  {name:"StoneBwoy"},
  {name:"Shatta Wale"},
];

type NewReleaseProp = {
  rName: string;
  Content?: ReactNode; // Add this to accept custom content
};

type ReleaseContentProps = {
  artistNames: {
    name: string;
  }[];
  rContainer?: string;
  img: string[];
  className1?: string;
  className?: string;
  releasetype?:string
};

export function NewRelease({rName, Content}: NewReleaseProp) {
  return (
    <div className="release-wrapper">
      <div className="release">
        <div className="release__header">
          <h3>
            {rName} <CirclePlay className="play-icon" />
          </h3>
          <p>See more</p>
        </div>
        {Content || (
          <ReleaseContent 
            artistNames={artistName} 
            rContainer="release__content" 
            img={Release} 
             className1="release__title" 
            className="release__artist"
            releasetype="Release"
          />
        )}
      </div>
      
    </div>
  );
}

export function ReleaseContent({artistNames, rContainer = "release__content", img, className1 = "release__title", className = "release__artist", releasetype}: ReleaseContentProps) {
  return (
    <div className={rContainer}>
      {img.map((image: string, index: number) => (
        <div key={index} className="release__item">
          <div className="image-container">
            <img src={image} alt={`release ${index + 1}`} />
            <div className="overlay">
              <CirclePlay className="play-button" />
            </div>
          </div>
          <p className={className1}>{releasetype} {index + 1}</p>
          <p className={className}>{artistNames[index].name}</p>
        </div>
      ))}
    </div>
  );
}
