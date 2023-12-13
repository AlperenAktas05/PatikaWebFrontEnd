// Fonksiyona Parametre Göndermek
function writeFullName(name, surname){
    console.log(`Merhaba ${name} ${surname}`)
}

writeFullName("Alperen", "Aktaş")

// Fonksiyondan Geri Dönüş Almak
function writeAge(age){
    return `Yaşınız: ${age}`
}

let ageInfo = writeAge(19)
console.log(ageInfo)

// Parametre Olarak ID, Metin Alan ve ID'ye Metni Ekleyen Fonksiyon
function writeTextInID(id, text){
    let idObject = document.querySelector(`#${id}`)
    idObject.innerHTML = text
}

writeTextInID("info", `<p style="font-size: 100px;" class="text-warning">Text</p>`)

