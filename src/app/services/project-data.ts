import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    id: 1, name: "An ecommerce front end landing page",
    skills: "HTML, JavaScript, Sass, jQuery",
    description: "This is a landing page I made for a client in the UK(rufflefordogs.com)",
    url: "rufflefordogs.herokuapp.com",
    img: "../../assets/compressed/images/port-images/dog-herov2.png"
  },
  {
    id: 2,
    name: "A blog made with React and Redux",
    skills: "React, Redux, Express, MongoDB, Passport authentication, Radium CSS, Node.js, Custom express API",
    description: "This is a MERN stack blog that contains features such as creating, updating, deleting, and reading posts. It also has an authentication system.",
    url: "reactreduxblogcc.herokuapp.com",
    img: "../../assets/compressed/images/port-images/blogv2.png"
  },
  {
    id: 3,
    name: "An English Name Generator",
    skills: "React, Express, CSS, Node.js, Names API",
    description: "This is a web app that generates English names.",
    url: "english-gen.herokuapp.com/",
    img: "../../assets/compressed/images/port-images/engname.png"
  },
  {
    id: 4,
    name: "A neighborhood map with fun things to do",
    skills: "jQuery, Google Maps API, HTML, CSS",
    description: "This is a map that shows fun things to do in downtown Las Vegas",
    url: "neighborhoodmapcc.herokuapp.com/",
    img: "../../assets/compressed/images/port-images/map.png"
  },
  {
    id: 5,
    name: "A game of Simon Says",
    skills: "jQuery, HTML, CSS",
    description: "A game of Simon Says",
    url: "codepen.io/capozzic1/pen/qqPBvo",
    img: "../../assets/compressed/images/port-images/simon.png"
  },
  {
    id: 6,
    name: "Rock, Scissors, Paper",
    skills: "Javascript ES6, HTML, CSS",
    description: "A game of rock, scissors, and paper.",
    url: "capozzic1.github.io/es2015-rock-scissors-paper/",
    img: "../../assets/compressed/images/port-images/rockscissor.png"
  }
]
