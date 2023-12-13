// Normal Fonksiyon
function writeFullName(name, surname){
    console.log(`Merhaba ${name} ${surname}`)
}

writeFullName("Alperen", "Aktaş")

// Tek Parametre, Tek İşlem
const info = firstName => console.log(`Merhaba ${firstName}`)
info("Alperen")

// Çok Parametre, Tek İşlem
const info2 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
info2("Alperen", "Aktaş")

// Çok Parametre, Çok İşlem
const info3 = (firstName, lastName) => {
    let text = `Merhaba ${firstName} ${lastName}`
    console.log(text)
    return text
}
info3("Alperen", "Aktaş")