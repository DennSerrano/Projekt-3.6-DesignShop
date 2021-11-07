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

let transitionMenu = document.getElementById("transitionMenu")
function openMenu() {
    transitionMenu.style.height = "100%"
    transitionMenu.style.opacity = "1"
}

function closeMenu() {
    transitionMenu.style.height = "0"
    transitionMenu.style.opacity = "0"
}