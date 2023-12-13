//Normal Kullanım
let nick = "alperen"
let domain = "gmail.com"
let mail = nick + "@" + domain
console.log("Merhaba " , nick , ", hesabına hoşgeldin. Senin E-Mailin: " + mail)



//Template Literals Kullanımı
let info=`
Merhaba ${nick}, hesabına hoşgeldin.
Kısa adın: ${nick[0]}
Mail adresin: ${mail}
E-Mailinizin uzunluğu: ${mail.length}
Güncel Borcunuz: ${(5+9)*12}
Tarih: ${new Date().getUTCDate()} / ${new Date().getMonth()+1} / ${new Date().getUTCFullYear()}
`

console.log(info)