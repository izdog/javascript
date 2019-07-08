const eleves = ['logan', 'typhaine', 'thomas', 'mathilde', 'valentin', 'dorian', 'mathieu', 'celia', 'adrian']
const colors = ['#95a5a6', '#ecf0f1', '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#e74c3c', '#9b59b6', '#f39c12', '#d35400', '#c0392b']
const btn = document.querySelector('.btn');
const eleve = document.getElementById('ctr-eleves')
const godCtr = document.getElementById('godMode')

let triche = false
let indice = 0
let nbTours = 0
let interval


document.addEventListener('keydown', (e) => {
    const keyPressed = e.key

    if(keyPressed === 'Control'){
        godMode()
    }  
})

btn.addEventListener('click', (e) => {
    e.preventDefault()

    interval = getRandomNumber(100,800)
    launchRandom = setInterval(random, 1) 
})


const random = () => {
    const rdmEleve = eleves[getRandomNumber(0, eleves.length - 1)]
    const rdmColor = colors[getRandomNumber(0, colors.length - 1)]

    eleve.style.color = rdmColor

    if(nbTours > interval){
        nbTours = 0
        eleve.innerHTML = triche ? ucfirst(eleves[0]) : ucfirst(rdmEleve)
        clearInterval(launchRandom)
    }else {
        eleve.innerHTML = ucfirst(rdmEleve)
        nbTours++
    }
}

const getRandomNumber = (debut, fin) => {
    const min = Math.ceil(debut);
    const max = Math.floor(fin);

    return Math.floor(Math.random() * (max - min +1)) + min;
}

const godMode = () => {
    triche = triche === true ? false : true
    
    godCtr.innerHTML = godCtr.innerHTML === 'godmode=0' ? 'godmode=1' : 'godmode=0'
    godCtr.setAttribute('data-active', 1)

    setTimeout(() => {
        godCtr.setAttribute('data-active', 0)
    }, 1000)
}


const ucfirst = string => {
    const str = string.charAt(0).toUpperCase() + string.slice(1)
    
    return str
}

