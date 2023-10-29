let istatus = document.querySelector("#status");
let add = document.querySelector("#add");
let remove = document.getElementById("remove");

add.addEventListener("click", function () {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
});
remove.addEventListener("click", function () {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
});