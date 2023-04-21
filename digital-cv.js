let title = document.querySelector("h1");
let projectCv = document.querySelector(".cv");
let projectPet = document.querySelector(".pet");
let projectNews = document.querySelector(".news");

if (document.location.href.includes("project-cv")) {
  let all = document.querySelectorAll("#project-cv .cv");
  title.innerHTML = "Project Charter - CV";
  projectPet.style.display = "none";
  projectNews.style.display = "none";
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-pet")) {
  title.innerHTML = "Project Charter - PET";
  projectCv.style.display = "none";
  projectNews.style.display = "none";
  let all = document.querySelectorAll("#project-pet .pet");
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-news")) {
  title.innerHTML = "Project Charter - NEWS";
  projectCv.style.display = "none";
  projectPet.style.display = "none";
  let all = document.querySelectorAll("#project-news.news");
  all.forEach((item) => {
    item.style.display = "flex";
  });
}
