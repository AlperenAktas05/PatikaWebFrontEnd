//Kullanıcı adı girilirse adını konsola yazan girmediyse uyaran program

let username = prompt("Lütfen Kullanıcı Adınızı Giriniz:")

if(username.length > 0 ){
    console.log("Kullanıcı Adınız:" , username)
}
else{
    console.log("Kullanıcı Adı Boş Bırakılamaz")
}