//Formu tanımlamak ve default ayarı engellemek

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", userFormSubmit)

function userFormSubmit(event){
    event.preventDefault()
    console.log("Gönderildi")
}