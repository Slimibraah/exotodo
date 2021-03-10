// Exo1
// let boite = document.querySelectorAll('.exo1 li')
// let supprime = document.querySelectorAll('.exo1 span')
// boite.forEach((element ,i) => {
//     supprime[i].addEventListener('click' , () => {
//         element.remove()   
//     })
// })

// Exo2

let exo2 = document.querySelectorAll('div')[1]
let carre = exo2.querySelector('ul li')
let red = exo2.querySelector('li span')
let blue = exo2.querySelectorAll('span')[1]

if (red) {
    carre.addEventListener('click' , () =>{
        carre.style.color = 'red'
    })
    
} else if (blue) {
    carre.addEventListener('click' , () =>{
        carre.style.color = 'blue'
    })}
