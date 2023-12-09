// İnput verisini almak ve listeye eklemek
let formDOM = document.querySelector("#input");
formDOM.addEventListener("submit", formSubmit);

let taskListDOM = document.querySelector("#taskList");

let taskArray = [];
let counter = 0;

let alertDOM = document.querySelector("#alert");

// Sayfa yüklendiğinde local storage'dan verileri al
document.addEventListener("DOMContentLoaded", () => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        taskArray = JSON.parse(storedTasks);
        updateTaskList();
    }
});

function formSubmit(event) {
    event.preventDefault();

    let inputTextDOM = document.querySelector("#inputText");

    if (!inputTextDOM.value) {
        alertDOM.innerHTML = `
        <div class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
        <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
          <div class="toast-header">
            <strong class="mr-auto">Uyarı!</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
            Lütfen Görev Giriniz!
          </div>
        </div>
      </div>
        `;

        let toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();

        return;
    }
    else{
        alertDOM.innerHTML = `
        <div class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
        <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
          <div class="toast-header">
            <strong class="mr-auto">Bildirim</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
            Görev Eklendi.
          </div>
        </div>
      </div>
        `;

        let toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
    }

    taskArray[counter] = inputTextDOM.value;

    let taskListIndexDOM = document.createElement("li");
    taskListIndexDOM.classList.add("list-group-item");
    taskListIndexDOM.innerHTML = `
        <form id="inputList${counter}" class="d-flex align-items-center">
            <span>${taskArray[counter]}</span>
             <button type="button" class="input-group-text ml-auto btn-delete" data-index="${counter}">X</button>
        </form>
    `;
    taskListDOM.append(taskListIndexDOM);
    inputTextDOM.value = "";
    counter++;
    updateLocalStorage();
    attachDeleteEvent(); // Yeni form ekledikten sonra silme olayını tekrar bağla
}

// Listeden veri silmek
function attachDeleteEvent() {
    let deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", formDelete);
    });
}

function formDelete(event) {
    let indexToDelete = event.target.getAttribute("data-index");
    taskArray.splice(indexToDelete, 1); // Diziden elemanı kaldır
    updateLocalStorage();
    updateTaskList(); // Liste güncelle
    alertDOM.innerHTML = `
    <div class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
    <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
      <div class="toast-header">
        <strong class="mr-auto">Bildirim</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Görev Silindi.
      </div>
    </div>
  </div>
    `;

    let toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
}

function updateTaskList() {
    taskListDOM.innerHTML = ""; // Liste temizle
    taskArray.forEach((task, index) => {
        let taskListIndexDOM = document.createElement("li");
        taskListIndexDOM.classList.add("list-group-item");
        taskListIndexDOM.innerHTML = `
            <form id="inputList${index}" class="d-flex align-items-center">
                <span>${task}</span>
                 <button type="button" class="input-group-text ml-auto btn-delete" data-index="${index}">X</button>
            </form>
        `;
        taskListDOM.append(taskListIndexDOM);
    });
    attachDeleteEvent(); // Silme olayını tekrar bağla
}

function updateLocalStorage() {
    // Verileri JSON formatına çevirip local storage'a kaydet
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}