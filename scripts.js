let input = document.querySelector(".inp");
let button = document.querySelector(".btn");
let listContainer = document.querySelector(".listContainer");

button.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("Enter a task first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10006";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getData();
