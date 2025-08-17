
let burgerMenu = document.querySelector("header nav .burger-icon");
let ulHeader = document.querySelector("header nav ul");
let autoYear = document
  .querySelector("footer span")
  .before(document.createTextNode(new Date().getFullYear()));
let progressInPage = document.querySelector(".progress-page");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let projectsContainer = document.querySelector(".projects");
let projectNum = document.querySelectorAll(".projects .text .number");
let skillsContainer = document.querySelector(".skills");
let skillsProg = document.querySelectorAll(".skills span");
let duration = 3000;
let startNum = false;
let startProg = false;
window.onscroll = () => {
  progressInPage.style.width = `${
    (document.documentElement.scrollTop * 100) / height
  }%`;
  if (projectsContainer.offsetTop - 430 < window.scrollY) {
    if (!startNum) {
      startNum = true;
      projectNum.forEach((num) => {
        let goal = num.dataset.num;
        let counter = setInterval(() => {
          num.textContent++;
          if (num.textContent == goal) {
            clearInterval(counter);
          }
        }, duration / goal);
      });
    }
  }
  if (window.scrollY > skillsContainer.offsetTop - 430) {
    if (!startProg) {
      startProg = false;
      skillsProg.forEach((prog) => {
        prog.style.width = prog.dataset.text;
      });
    }
  }
};
burgerMenu.onclick = () => {
  ulHeader.classList.toggle("active");
}