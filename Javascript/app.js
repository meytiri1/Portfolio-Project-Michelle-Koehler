let allProjects = {
  project1: {
    title: "Asian dramas project",
    description: "Lorem ipsum bli bla blub.",
  },
  project2: {
    title: "Weather app project",
    description: "Lorem ipsum bli bla blub.",
  },
  project3: {
    title: "Yoga project",
    description: "Lorem ipsum bli bla blub.",
  },
};

let pj1 = document.querySelector("#pj-1");
let pj2 = document.querySelector("#pj-2");
let pj3 = document.querySelector("#pj-3");
let pjTitle = document.querySelector("#pj-title");
let pjDescription = document.querySelector("#pj-description");
let pjTools = document.querySelector("#pj-tools");
let pjLaunchBtn = document.querySelector(".launch-tbn");
let pjLaunchTxt = document.querySelector("#pj-launch");

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", showCurrentLocation);
