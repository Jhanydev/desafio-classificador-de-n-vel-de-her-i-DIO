let nome = "Super Turbo";
let xpHeroi = 1000 ;
let xpMultiplicador = 0.4;

for(let i = 0; i < 6; i++){
    xpHeroi += xpHeroi * xpMultiplicador;    
}

let nivelHeroi = calculaNivelHeroi(xpHeroi);

console.log("O Herói de nome "+ nome + " esta no nível: " + nivelHeroi);

function calculaNivelHeroi(xpHeroi){

    if(xpHeroi <= 1000){
        return "Ferro";
    }else if(xpHeroi > 1000 + xpHeroi <= 2000){
        return "Bronze";
    }else if(xpHeroi > 2000 + xpHeroi <= 5000){
        return "Prata";   
    }else if(xpHeroi > 6000 + xpHeroi <= 7000){
        return "Ouro"; 
    }else if(xpHeroi > 7000 + xpHeroi <= 8000){
        return "Platina"; 
    }else if(xpHeroi > 8000 + xpHeroi <= 9000){
        return "Ascendente";   
    }else if(xpHeroi > 9000 + xpHeroi <= 10000){
        return "Imortal"; 
    }else{
        return "Radiante";
    }

}
