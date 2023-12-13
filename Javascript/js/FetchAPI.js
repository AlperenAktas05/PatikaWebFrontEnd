//Fetch oluşturma

// JSON ile veri çekme
fetch("js/Fetch.json").then(
    response => {
        return response.json()
    }
).then(
    responseJson => {
        console.log(responseJson)
    }
)

let userListDOM = document.querySelector("#userList")

//API ile veri çekme ve HTML'e yazma
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(
    responseJson => {
        responseJson.forEach(item => {
            let userListIndexDOM = document.createElement("li")
            userListIndexDOM.innerHTML = item.title
            userListIndexDOM.classList.add("list-group-item")
            userListDOM.append(userListIndexDOM)
        })
    }
)