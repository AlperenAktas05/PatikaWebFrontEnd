let gradeFormDOM = document.querySelector("#gradeForm")
gradeFormDOM.addEventListener("submit", inputHandler)

function inputHandler(event){
    event.preventDefault()

    let userNameDOM = document.querySelector("#username")
    let gradeDOM = document.querySelector("#grade")
    let alertDOM = document.querySelector("#alert")

    if(userNameDOM.value && gradeDOM.value){
        studentAdd(userNameDOM.value, gradeDOM.value)
        userNameDOM.value = ""
        gradeDOM.value = ""
        alertDOM.innerHTML = ""
    }
    else{
        alertDOM.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Uyarı!</strong> Lütfen Boş Alan Bırakmayınız.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
}

let gradeListDOM = document.querySelector("#gradeList")

function studentAdd(username, grade){
    let student = document.createElement("li")
    student.innerHTML = `
    ${username}
     <span class="badge badge-primary badge-pill">${grade}</span>
     `
    student.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")

    gradeListDOM.append(student)
}
