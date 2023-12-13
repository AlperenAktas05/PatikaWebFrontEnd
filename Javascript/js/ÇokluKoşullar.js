// Kullanıcı adı ve yaşı girilen kursiyerin ehliyet alıp alamayacağını belirten program

let username = prompt("Kullanıcı Adı Giriniz:")
let age = prompt("Yasinizi Giriniz")
let info = document.querySelector("#info")

if(username && age >= 18){
    info.innerHTML = "Ehliyet Alabilirsiniz"
}
else if(!username){
    info.innerHTML = "Kullanıcı Adı Boş Bırakılamaz"
}
else if(!(age >= 18)){
    info.innerHTML = "Yaşınız 18 Yaşından Küçük veya Boş Olduğu İçin Ehliyet Alamazsınız"
}
