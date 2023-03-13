let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];
let arrFrames = [];
let arrFigures = [];
 
let body = document.getElementsByTagName("body")[0];
let main = document.getElementsByTagName("main")[0];

body.appendChild(main)

function separateItens(itens){
    for(let i = 0; i< itens.length; i++){
        //acessando primeiro o indice depois a propriedade
        if(itens[i].type == 'Painting'){
            //puxando para a lista vazia os itens que são true 
            arrFrames.push(itens[i]);

        }
        //separando as listas
        else if(itens[i].type == 'Action Figures'){
            arrFigures.push(itens[i])

        }
    }
    return arrFigures;



}
separateItens(itens);
    
//criação das propriedades do objeto
//criar elemetos presentes no objeto 
//adcionar seu "contéudo"
//comparar a section com o array criado 
// adcionar ao seu "pai"

// SECTION FIGURE 
function renderItens(arrFrames,arrFigures){
    
        for(let i=0; i< arrFigures.length; i++){
            let cardImg = document.createElement('img');
            cardImg.src = arrFigures[i].image;
            cardImg.alt = arrFigures[i].name;
            cardImg.classList.add('imgItem');

            
            let sectionFigures = document.getElementsByClassName('cardFigures')[0]; 
            let listaObj = document.createElement('li');
            let cardNome = document.createElement('h3');

            cardNome.innerText = arrFigures[i].name;
            cardNome.classList.add('nomeItem')

            let p = document.createElement('p');
            p.innerText = arrFigures[i].price;
            p.classList.add('precoItem');

            //lista vai receber atributos 
            listaObj.appendChild(cardImg);
            listaObj.appendChild(cardNome);
            listaObj.appendChild(p);
            //seção recebe a lista 
            sectionFigures.appendChild(listaObj); 
            //body recebe main que recebe section 
            


        }
    

//SECTION FRAMES
    
        for(let i =0; i < arrFrames.length; i++){
           
            let cardImg = document.createElement('img');
            cardImg.src = arrFrames[i].image;
            cardImg.alt = arrFrames[i].name; 
            cardImg.classList.add('imgItem'); 

            //let sectionFrames = document.getElementsByClassName('arrFrames')[0];
            let sectionFrames =document.getElementsByClassName('cardPaintings')[0];
            let listaObj = document.createElement('li');

            let cardNome = document.createElement('h3');
            cardNome.innerText = arrFrames[i].name;
            cardNome.classList.add('nomeItem');

            let p = document.createElement('p');
            p.innerText = arrFrames[i].price; 
            p.classList.add('precoItem'); 

            // listaObj vai receber atributos 
            listaObj.appendChild(cardImg);
            listaObj.appendChild(cardNome);
            listaObj.appendChild(p);
            // seção vai receber lista como filho
            sectionFrames.appendChild(listaObj); 
            
            

        }
    

}; 
renderItens(arrFrames,arrFigures)