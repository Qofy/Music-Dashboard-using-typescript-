import { CirclePlus, Headphones, Heart, House, LayoutDashboard } from "lucide-react"
export interface LeftCmItem{
  id:number;
  img:React.ComponentType;
  txt:string;
  path?:string
}

export const data1 = [
  {
    id:1,
    img: House,
    txt: "Home",
    path: "/"
  },
  {
    id:2,
    img: LayoutDashboard,
    txt: "Browse",
    path:"browse"
  },
  {
    id:3,
    img: Heart,
    txt: "Favorite",
    path:"favorite"

  },
  {
    id:4,
    img:Headphones,
    txt: "Library",
    path:"library"
  },

]

export const data2 = [
  {
    img: CirclePlus,
    txt: "PlayLists"
  },
  "For workplace",
  "Rich Brian's collections",
  "deep focus",
  "Lo-Fi Jazz upbeats",
  "For Sleep",
  "Christmas playlist"
]