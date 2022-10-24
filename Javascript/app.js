//Change Project descriptions://
let allProjects = [
  {
    project: {
      name: "project1",
      title: "Asian dramas project",
      description:
        "The Asian dramas project was the final project of the SheCodes Basics workshop I did in July 2022. We were supposed to build a simple single page HTML website, styled with CSS and a basic Javascript interaction with a button. i.e. receiving an alert when clicking. The project was built based on a predefined layout, but the contents and styling were chosen by myself, and on something I am enthusiastic about.",
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
      description:
        "The weather app was the final project of the SheCodes Plus workshop. It included several steps, starting with wireframing and predesigning the app's user interface. The following steps included building the HTML of the website and styling it with CSS. Afterwards, I learned advanced vanilla Javascript techniques, including fetching APIs online using AJAX and implementing their data accordingly within logical functions to build a daily and a 5-day weather forecast based on any city entered within the search engine. Over the course of the project, a Githhub repository was created and updates in the code were commited and pushed regularly. As part of the last step, the weather app was hosted on Netlify, to be globally available.",
      tools: "InVision, HTML, CSS, Javascript, GitHub, Netlify",
      button: "Launch Weather App project",
      address:
        "https://www.shecodes.io/workshops/shecodes-plus-9105f99c-3cb9-4c30-b067-2fe257ea641b/projects/1155364",
    },
  },
  {
    project: {
      name: "project3",
      title: "Portfolio project",
      description:
        "The third main project from the SheCodes Responsive workshop was this portfolio website. Despite receiving an example portfolio, I decided to design and build mine all by myself. I started out with a wireframe and transferred it to an elaborate design on Figma. The next step included building the basic HTML and CSS of this portfolio website. For my last steps, I inclduded Javascript for functionality of the project overview and made the website SEO friendly. The project is available on GitHub and hostet via Netlify. The main goal of this website was responsiveness over all screen sizes.",
      tools: "InVision, Figma, HTML, CSS, Javascript, Github, Netlify",
      button: "Launch Portfolio project",
      address: "#",
    },
  },
];

function changeLaunchButton(projects) {
  let pjLaunchTxt = (document.querySelector("#pj-launch").innerHTML =
    projects.project.button);
  let pjButton = document.querySelector("#launch-button");
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

//Change nav bar active link://
let section = document.querySelectorAll(".section");
let lists = document.querySelectorAll(".nav-link");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      let target = document.querySelector(
        `[href="index.html#${id}"]`
      ).parentNode;

      activeLink(target);
    }
  });
};
