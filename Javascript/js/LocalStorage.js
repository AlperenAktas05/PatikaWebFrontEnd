//Local Storage Ekleme ve Yazdırma
localStorage.setItem("kedi", "kopek")
let writeLocalStorage = localStorage.getItem("kedi")
console.log(writeLocalStorage)

//Local Storage Düzenleme ve Yazdırma
localStorage.setItem("kedi", "kus")
writeLocalStorage = localStorage.getItem("kedi")
console.log(writeLocalStorage)

//Local Storage Silme ve Null Yazdırma
localStorage.removeItem("kedi")
writeLocalStorage = localStorage.getItem("kedi")
console.log(writeLocalStorage)

localStorage.setItem()