const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//Filtre butonlarının eklenmesi
let filterButtonsDOM = document.querySelector("#filterButtons") //div

let filterButtonsListDOM = document.querySelector("#filterButtonsList") //ul
filterButtonsListDOM.classList.add("list-unstyled")

let filterButtonsArray = ["All", "Korea", "Japan", "China"]

filterButtonsArray.forEach((item, index, array) => {
  let filterButtonsListLiDOM = document.createElement("li") //li
  filterButtonsListLiDOM.classList.add("list-inline-item", "border", "border-1", "rounded", "p-2", "border-dark")

  let filterButtonsListLink = document.createElement("a") //a
  filterButtonsListLink.href = "#"
  filterButtonsListLink.classList.add("text-dark", "text-decoration-none", "filter-button")
  filterButtonsListLink.innerHTML = item

  filterButtonsListLiDOM.append(filterButtonsListLink)
  filterButtonsListDOM.append(filterButtonsListLiDOM)
})

filterButtonsDOM.append(filterButtonsListDOM)

//Menünün eklenmesi
function addMenu(whichMenu){

  let mainRowDOM = document.querySelector("#mainRow")

  let lineRowDOM = document.createElement("div")
  lineRowDOM.classList.add("row")

  whichMenu.forEach((item, index, array) => {

  let menuColDOM = document.createElement("div")
  menuColDOM.classList.add("col-6", "mb-5")

  let menuRowDOM = document.createElement("div")
  menuRowDOM.classList.add("row")

  let menuImgColDOM = document.createElement("div")
  menuImgColDOM.classList.add("col-4")

  let menuContentColDOM = document.createElement("div")
  menuContentColDOM.classList.add("col-8")

  let menuImg = document.createElement("img")
  menuImg.src = item.img
  menuImg.classList.add("w-75", "rounded", "border", "border-dark", "border-5")

  let menuTitle = document.createElement("h3")
  menuTitle.innerHTML = `<h3>${item.title}<span style="float: right">${item.price}</span></h3>`
  menuTitle.classList.add("text-danger","border-bottom", "border-dark")

  let menuDesc = document.createElement("p")
  menuDesc.innerHTML = `<p>${item.desc}</p>`

  menuImgColDOM.append(menuImg)
  menuContentColDOM.append(menuTitle)
  menuContentColDOM.append(menuDesc)

  menuRowDOM.append(menuImgColDOM)
  menuRowDOM.append(menuContentColDOM)

  menuColDOM.append(menuRowDOM)
 
  lineRowDOM.append(menuColDOM)
  
  if(index % 2 == 0){
    mainRowDOM.append(lineRowDOM)
  }
})
}

document.addEventListener("DOMContentLoaded",addMenu(menu))

//Menünün Filtrelenmesi

let filterButtonsArray2 = document.querySelectorAll(".filter-button")

filterButtonsArray2.forEach((item, index, array) => {
  item.addEventListener("click", applyFilter)
})

function applyFilter(event){
  let mainRowDOM = document.querySelector("#mainRow")
  let clickedButton = event.target
  
  if(clickedButton.innerHTML == "All"){
    let allMenu = menu.filter( item => item.category == "Korea" || item.category == "Japan" || item.category == "China")
    mainRowDOM.innerHTML = ""
    addMenu(allMenu)
  }

  else if(clickedButton.innerHTML == "Korea"){
    let koreaMenu = menu.filter( item => item.category == "Korea")
    mainRowDOM.innerHTML = ""
    addMenu(koreaMenu)
  }

  else if(clickedButton.innerHTML == "Japan"){
    let japanMenu = menu.filter( item => item.category == "Japan")
    mainRowDOM.innerHTML = ""
    addMenu(japanMenu)
  }

  else if(clickedButton.innerHTML == "China"){
    let chinaMenu = menu.filter( item => item.category == "China")
    mainRowDOM.innerHTML = ""
    addMenu(chinaMenu)
  }
}
