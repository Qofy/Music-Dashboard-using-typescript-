import { NewRelease } from "./NewRelease";
import { ReleaseContent } from "./NewRelease";
// import R1 from "../images/newRelease/r1.jpg";
// import R2 from "../images/newRelease/r2.jpg";
// import R3 from "../images/newRelease/r3.png";
// import R4 from "../images/newRelease/r4.jpg";
// import R5 from "../images/newRelease/r5.webp";
// import R6 from "../images/newRelease/r6.jpg";
// import R7 from "../images/newRelease/r7.jpg";
import "../scss/component/mostlike.scss"

const ml1= "https://source.boomplaymusic.com/group10/M00/08/03/3682cd218cc2488f9a2c0ac9f734380c_464_464.webp";
const ml2= "https://source.boomplaymusic.com/group10/M00/64/B2/5d332b16e4894d91be4e8561b4f756fb_464_464.webp";

const ml3= "https://source.boomplaymusic.com/group10/M00/01/20/6d8e001c788c45d99e5be05d37b0fba3H1080W1080_464_464.webp";
const ml4= "https://source.boomplaymusic.com/group10/M00/06/24/70eac19e08fb458486b71120fd75f309_464_464.webp";
const ml5= "https://source.boomplaymusic.com/group10/M00/E1/9C/3a2c44ef89db4b6dbc81dc126a47f56e_464_464.webp";
const ml6= "https://source.boomplaymusic.com/group10/M00/07/29/21eec77e0a1449478ab547393be7410e_464_464.webp";
const ml7= "https://source.boomplaymusic.com/group10/M00/11/06/dee2c936b3104e18b368cc2498a6d42dH1080W1080_464_464.webp";


const Release1=[ml1,ml2, ml3,ml4,ml5,ml6,ml7]
// const Release = [...[R1, R2, R3, R4, R5, R6, R7], ...Release1];

const artistNames = [
  {name:"Davido"},
  {name:"Zlatan"},
  {name:"Simi"},
  {name:"Lucky Dube Ft Vybz Kratel"},
  {name:"Me Eazi Ft Kizz Daniel"},
  {name:"Naeto C Ft M.I Abaga"},
  {name:"Kojo Black"},
];

export function MostLike() {
  return (
    <div className="most-like-contanier">
      <NewRelease 
        rName="You May Play" 
        Content={
          <ReleaseContent 
            artistNames={artistNames} 
            rContainer="release__content" 
            img={Release1}
            className="most-liked-name"
            className1="releases"
            
          />
        }
      />
    </div>
  );
}