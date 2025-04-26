const formEl = document.querySelector("form");
const inputEl = document.querySelector("#input");
const ulEl = document.querySelector(".ul");
const del = document.querySelectorAll(".del");
const mod = document.querySelector(".mod > img");
const change = document.querySelector("#change");

const all = document.querySelector("#all");
const done = document.querySelector("#done");
const doing = document.querySelector("#doing");

const text = document.querySelectorAll(".text");
mod.addEventListener("click", () => {
  if (change.classList == "light") {
    change.classList = "dark";
    change.removeAttribute("href");
    change.setAttribute("href", "second.css");
  } else {
    change.classList = "light";
    change.removeAttribute("href");
    change.setAttribute("href", "main.css");
  }
});

function createTodo(todoText) {
  const liEl = document.createElement("li");
  liEl.textContent = todoText;
  liEl.addEventListener("dblclick", (e) => {
    e.target.remove();
    setTotols();
  });
  liEl.addEventListener("click", (e) => {
    e.target.classList.toggle("done");
    setTotols();
  });
  ulEl.prepend(liEl);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inpValue = inputEl.value;
  createTodo(inpValue);
  inputEl.value = null;
  setTotols();
});

function setTotols() {
  let allCount = 0;
  let doneCount = 0;
  let doingCount = 0;

  allCount = ulEl.children.length - 1;
  for (let toDoEl of ulEl.children) {
    if (toDoEl.classList.contains("done")) {
      doneCount++;
    }
  }
  doingCount = allCount - doneCount;
  all.textContent = `All : ${allCount}`;
  doing.textContent = `Doing : ${doingCount}`;
  done.textContent = `Done : ${doneCount}`;
}
