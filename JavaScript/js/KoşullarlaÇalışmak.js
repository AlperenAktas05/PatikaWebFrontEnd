/*
Kullanıcıdan not bilgisi giriliyor:
Notun 0-100 arasında olduğunu kontrol et
Harf notu ver
FF alırsa üzgün surat, diğerlerinde gülücük koy
FF bilgisini kırmızı yazarken diğerlerini mavi yaz
*/

let grade = prompt("Lütfen Sınavdan Aldığınız Notu Giriniz:")
let info = document.querySelector("#info")

if(!(grade >= 0 && grade <=100)){
    info.classList.add("text-warning")
    info.innerHTML = "Lütfen 0-100 Arası Bir Deger Giriniz"
}
else{
    
    if(grade <=100 && grade >=90){
        info.classList.add("text-primary")
        info.innerHTML = "AA 😀"
    }
    else if (grade <90 && grade >=85){
        info.classList.add("text-primary")
        info.innerHTML = "BA 😀"
    }
    else if (grade <85 && grade >=80){
        info.classList.add("text-primary")
        info.innerHTML = "BB 😀"
    }
    else if (grade <80 && grade >=75){
        info.classList.add("text-primary")
        info.innerHTML = "CB 😀"
    }
    else if (grade <75 && grade >=70){
        info.classList.add("text-primary")
        info.innerHTML = "CC 😀"
    }
    else if (grade <70 && grade >=65){
        info.classList.add("text-primary")
        info.innerHTML = "DC 😀"
    }
    else if (grade <65 && grade >=60){
        info.classList.add("text-primary")
        info.innerHTML = "DD 😀"
    }
    else if (grade <60 && grade >=50){
        info.classList.add("text-primary")
        info.innerHTML = "FD 😀"
    }
    else{
        info.classList.add("text-danger")
        info.innerHTML = "FF 😞"
    }
}
