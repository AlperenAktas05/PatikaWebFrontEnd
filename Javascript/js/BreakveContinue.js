//Break
console.log("Break:")
for(let i=0; i<10; i++){
    if(i == 5){
        break //i = 5 olunca döngüden çık
    }

    console.log(i)
}

//Continue
console.log("Continue:")
for(let i=0; i<10; i++){
    if(i == 5){
        continue  //i = 5 olunca direkt döngünün sonraki adımına geç
    }

    console.log(i)
}

//Bir diziyi HTML listesine ekleme ve break-continue kullanımı

let users = ["Alperen", "Mert", "Selen", "Cengiz"]

let userListDOM = document.querySelector("#userList")
userListDOM.classList.add("list-group", "col-2", "offset-5", "mt-5")

for(let i=0; i<users.length; i++){

    if(users[i] == "Selen"){
        //break-continue
    }

    let userListIndexDOM = document.createElement("li")
    userListIndexDOM.innerHTML = users[i]
    userListIndexDOM.classList.add("list-group-item", "text-center", "border","border-primary")
    userListDOM.append(userListIndexDOM)
}