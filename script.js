
let dimension = 20 ;
let rgb ;
let random = true ;

const wrapper = document.querySelector('#wrapper') ;
    wrapper.setAttribute('style', 'grid-template-columns: repeat('+ dimension +', auto);')

const box = document.createElement('div') ;
    box.classList.add('box') ;

const buttons = document.querySelectorAll('.button') ;
const selector = document.querySelector('#muestrario') ;
    selector.addEventListener('input', () => {
        random = false ;
        rgb = selector.value;
        console.log(rgb) ;
    }) ;

const sliderValue = document.querySelector("#slider-value") ;
const slider = document.querySelector("#slider") ;
    slider.addEventListener('input', () => {
        sliderValue.innerHTML = slider.value ;
        dimension = slider.value ;
    }) ;
    slider.onchange = () => createGrid() ; 
 
function createGrid(){
    wrapper.innerHTML = "" ;
    wrapper.setAttribute('style', 'grid-template-columns: repeat('+ dimension +', auto);')
    for (let index = 0; index < dimension; index++) {
        for (let index2 = 0; index2 < dimension; index2++) {
            wrapper.appendChild(box.cloneNode(true)) ;            
        }
    }
    wrapper.childNodes.forEach(node => {
        node.addEventListener('mouseenter', (e) => {
            if(e.buttons === 1){
                if(random === true)
                    rgb = 'rgb('+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) + ')' ;
                node.setAttribute('style', 'background-color:'+ rgb) ;
            } ;
        }) ;
        node.addEventListener('click', (e) => {
            if(random === true)
                rgb = 'rgb('+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) + ')' ;
                node.setAttribute('style', 'background-color:'+ rgb) ;
        }) ;
    }) ;
}
createGrid() ;



buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        button.id==="random"? random = true : random = false ;
        rgb = window.getComputedStyle(button).getPropertyValue("background-color") ;
        console.log(rgb) ;
    })
})