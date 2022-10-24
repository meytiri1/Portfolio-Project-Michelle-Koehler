let allProjects = [
  {
    project: {
      name: "project1",
      title: "Asian dramas project",
      description: "Lorem ipsum bli bla blub.",
      tools: "HTML, CSS",
      button: "Launch Asian dramas project",
      address:
        "https://www.shecodes.io/workshops/shecodes-basics-65b0fa59-234a-4d61-bb1b-d5cb47061966/projects/1045671",
    },
  },
  {
    project: {
      name: "project2",
      title: "Weather app project",
      description: "Lorem ipsum bli bla blub.",
      tools: "HTML, CSS, Javascript",
      button: "Launch Weather App project",
      address:
        "https://www.shecodes.io/workshops/shecodes-plus-9105f99c-3cb9-4c30-b067-2fe257ea641b/projects/1155364",
    },
  },
  {
    project: {
      name: "project3",
      title: "Yoga project",
      description: "Lorem ipsum bli bla blub.",
      tools: "HTML, CSS",
      button: "Launch Yoga project",
      address: "#",
    },
  },
];

function changeLaunchButton(projects) {
  let pjLaunchTxt = (document.querySelector("#pj-launch").innerHTML =
    allProjects.button);
  let pjButton = document.querySelector("#launch-button");
  console.log(projects.project.address);

  pjButton.setAttribute(`href`, projects.project.address);
}

function changeProject1Description() {
  let pjTitle = (document.querySelector("#pj-title").innerHTML =
    allProjects[0].project.title);
  let pjDescription = (document.querySelector("#pj-description").innerHTML =
    allProjects[0].project.description);
  let pjTools = (document.querySelector("#pj-tools").innerHTML =
    allProjects[0].project.tools);

  changeLaunchButton(allProjects[0]);
}

function changeProject2Description() {
  let pjTitle = (document.querySelector("#pj-title").innerHTML =
    allProjects[1].project.title);
  let pjDescription = (document.querySelector("#pj-description").innerHTML =
    allProjects[1].project.description);
  let pjTools = (document.querySelector("#pj-tools").innerHTML =
    allProjects[1].project.tools);

  changeLaunchButton(allProjects[1]);
}

function changeProject3Description() {
  let pjTitle = (document.querySelector("#pj-title").innerHTML =
    allProjects[2].project.title);
  let pjDescription = (document.querySelector("#pj-description").innerHTML =
    allProjects[2].project.description);
  let pjTools = (document.querySelector("#pj-tools").innerHTML =
    allProjects[2].project.tools);

  changeLaunchButton(allProjects[2]);
}

let pj1 = document.querySelector("#project1");
let pj2 = document.querySelector("#project2");
let pj3 = document.querySelector("#project3");

pj1.addEventListener("click", changeProject1Description);
pj2.addEventListener("click", changeProject2Description);
pj3.addEventListener("click", changeProject3Description);

changeProject1Description();
