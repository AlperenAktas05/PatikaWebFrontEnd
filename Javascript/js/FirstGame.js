let counter = 0;
let counterDOM = document.querySelector("#counter");
let buttonDOM = document.querySelector("#button");

buttonDOM.addEventListener("click", counterHandler);
buttonDOM.addEventListener("mousedown", noShadow)

function counterHandler() {
    if (this.style.color == "red") {
        this.style.color = "blue";
        this.style.borderColor = "blue";
        this.style.boxShadow = "0px 5px blue";
        this.style.active
        counter = counter + 1;
        counterDOM.innerHTML = `Sayaç: ${counter}`;
    } else if (this.style.color == "blue") {
        this.style.color = "green";
        this.style.borderColor = "green";
        this.style.boxShadow = "0px 5px green";
        counter = counter + 1;
        counterDOM.innerHTML = `Sayaç: ${counter}`;
    } else {
        this.style.color = "red";
        this.style.borderColor = "red";
        this.style.boxShadow = "0px 5px red";
        counter = counter + 1;
        counterDOM.innerHTML = `Sayaç: ${counter}`;
    }
}

function noShadow(){
    this.style.boxShadow = "none"
}

setTimeout(dur,5000)

function dur(){
    process.exit()     
}
