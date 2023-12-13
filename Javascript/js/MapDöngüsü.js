//Map döngüsü tanımlama

let users = ["aLpeReN", "mERt", "sElEn", "CeNgİZ"]
console.log(users)

let smallUsers = users.map(user => user.toLowerCase()) //Dizinin elemanları küçük harfle değişti
console.log(smallUsers)

let usersObject = users.map(user => { //Dizinin elemanları objelerle değişti
    return{
        userName: user, shortName: `${user[0].toUpperCase()}`, nickName: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`
    }    
}
)

console.log(usersObject)