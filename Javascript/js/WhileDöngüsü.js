//While döngüsü tanımlama
counter = 0

while(counter < 10){
    console.log(counter)
    counter++
}

//Sonsuz Döngü
let username

while(!username){ //username girilmediği sürece sonsuza dek çalışacak
    username = prompt("Lütfen Adinizi Giriniz:")
    console.log(username)
}