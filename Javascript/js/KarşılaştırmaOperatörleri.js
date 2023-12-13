let number = 10 
let user = "Alperen"

// Eşitse
console.log(number == 10)
console.log(number == "10")

//Hem Değeri Hen Türü Eşitse
console.log(number === 10)
console.log(number === "10")

//Eşit Değilse
console.log(10 != 10)
console.log(user != "Mert")

//Küçük veya Küçük Eşitse
console.log(10 <= 10)
console.log(10 < 10)

//Büyük veya Büyük Eşitse
console.log(10 >= 10)
console.log(10 > 10)

//&& Ve
console.log(number == 11 && user == "Alperen")

//|| Veya
console.log(number == 11 || user == "Alperen")

//! Değil
console.log(!(number == 11 ||user == "Alperen"))