let firstName = document.getElementById("firstName")
let surName = document.getElementById("surName")
let eMail = document.getElementById("eMail")
let number = document.getElementById("number")
let message = document.getElementById("message")

function submitContact() {
    console.log(firstName.value)
    console.log(surName.value)
    console.log(eMail.value)
    console.log(number.value)
    console.log(message.value)
}
function openMenu() {
    let toggleMenu = document.getElementById("toggleMenu")
    toggleMenu.classList.toggle("showMenu")