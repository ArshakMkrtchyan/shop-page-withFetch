let log_out = document.querySelector('.log_out')

log_out.addEventListener('click', () => {
    location.pathname = 'index1.html'
    localStorage.removeItem('user')
})

function stay(){
    if(!localStorage.getItem('user')){
        location.pathname = 'index1.html'
    }
}

stay()

let inner = document.querySelector('.inner')
let categories = document.querySelector('.categories')


function getData (url){
    fetch(url).then(res => {return res.json()}).then(data => {console.log(data)
        inner.innerHTML = ''
        data.products.forEach((product) =>{
            let elem=document.createElement("div")
            elem.setAttribute("class","box")
            elem.innerHTML=`<h2>${product.title}</h2> <img src="${product.thumbnail}"><p>${product.description}</p> <h4>price: ${product.price}$</h4>`
            inner.append(elem)
            for(let i = 0; i < product.images.length; i++){
                let change = document.createElement('div')
                change.setAttribute("class","change")
                change.innerHTML = ''
                inner.append(change)
                change.addEventListener('click', () => {
                    elem.innerHTML=`<h2>${product.title}</h2> <img src="${product.images[i]}"><p>${product.description}</p> <h4>price: ${product.price}$</h4>`
                })
            }
        })
    })
}

getData('https://dummyjson.com/products')    


function getCategories (url) {
    fetch(url).then(res => {return res.json()}).then(data => {
        data.forEach(element => {
            let elem = document.createElement('button')
            elem.setAttribute('class', 'btn')
            elem.innerHTML = element
            categories.append(elem)
            elem.addEventListener('click', () => {
                // console.log(element, 'el');
                getData(`https://dummyjson.com/products/category/${element}`)
            })
        });
    })
}

getCategories('https://dummyjson.com/products/categories')


let all = document.createElement('button')
all.setAttribute('class', 'btn')
all.innerText = 'All'
categories.append(all)
all.addEventListener('click', () =>{
    getData('https://dummyjson.com/products')
})

