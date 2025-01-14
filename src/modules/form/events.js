const newButton = document.getElementById("new-button")
const confirmButton = document.getElementById("confirm-button")
const cancelButton = document.getElementById("new-cancel")

const form = document.querySelector(".new-bg")


newButton.addEventListener("click", (event) => {
   form.classList.remove("hide")
})

confirmButton.addEventListener("click", (event) => {
   form.classList.add("hide")
})

cancelButton.addEventListener("click", (event) => {
   form.classList.add("hide")
})