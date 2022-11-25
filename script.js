
const dimension = 20 ;

const wrapper = document.querySelector('#wrapper') ;
wrapper.setAttribute('style', 'grid-template-columns: repeat('+ dimension +', auto);')

const box = document.createElement('div') ;
    box.classList.add('box') ;
 
for (let index = 0; index < dimension; index++) {
        for (let index2 = 0; index2 < dimension; index2++) {
            wrapper.appendChild(box.cloneNode(true)) ;            
        }
}

wrapper.childNodes.forEach(node => {
    node.addEventListener('mouseenter', (e) => {
        console.log(e) ;
        if(e.buttons === 1){
            let rgb = '('+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) + ')' ;
            node.setAttribute('style', 'background-color:rgb'+ rgb +';') ;
        } ;
    }) ;
    node.addEventListener('click', (e) => {
        console.log(e) ;
        let rgb = '('+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) + ')' ;
        node.setAttribute('style', 'background-color:rgb'+ rgb +';') ;
    }) ;
}) ;