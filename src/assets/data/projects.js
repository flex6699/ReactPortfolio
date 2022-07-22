import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projectImg.png";
import tic_tac from "../images/tic-tac-toe.png";
import Bookmark from "../images/book-mark.png";
import Weather from "../images/weather.png";
import matchCard from "../images/match-card.png";

const projects = [
  {
    id: uuidv4(),
    name: "Tic-tac-toe",
    desc: "Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
    img: tic_tac,
    link: "https://comfy-semolina-a44f8f.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Bookmark Save",
    desc: "This Bookmark save app is used for saving your fav website link with the help of local storage.",
    img: Bookmark,
    link: "https://comfy-semolina-a44f8f.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Weather",
    desc: "It helps to track Weather current conditions in real-time of different locations using api . It sometime not work because i am using free api.",
    img: Weather,
    link: "https://keen-flan-6ff872.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc: "A 2-D matching game designed for kids",
    img: matchCard,
    link: "https://neon-faun-f15266.netlify.app/",
  },
];

export default projects;
