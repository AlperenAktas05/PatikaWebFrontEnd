// İlk ve Son Elemana Erişme ve Değiştirme
let firstChild = document.querySelector("ul#list>li:first-child")
console.log(firstChild)
firstChild.innerHTML = "İlk Eleman Değiştirildi"

let lastChild = document.querySelector("ul#list>li:last-child")
console.log(lastChild)
lastChild.innerHTML = "Son Eleman Değiştirildi"

//Listeye Yeni Eleman Ekleme
let ulDOM = document.querySelector('ul#list')

let newLastChild = document.createElement('li')
newLastChild.innerHTML = "Sona eleman eklendi"
ulDOM.append(newLastChild)

let newFirstChild = document.createElement('li')
newFirstChild.innerHTML = "Başa eleman eklendi"
ulDOM.prepend(newFirstChild)