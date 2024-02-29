var nome = "Super Turbo";
var xpHeroi = 1000 ;
var xpMultiplicador = 0.2;

console.log("Olá")

for(var i = 0; i < 5; i++){
    xpHeroi += xpHeroi * xpMultiplicador;
    console.log("XP do Héroi: " + xpHeroi)
}

var nivelHeroi = calculaNivelHeroi(xpHeroi);

console.log("O Herói de nome "+ nome + " esta no nível: " + nivelHeroi);

function calculaNivelHeroi(xpHeroi){

    if(xpHeroi <= 1000){
        return "Ferro";

    }else if(xpHeroi > 1000 && xpHeroi <= 2000){
        return "Bronze";
    }else if(xpHeroi > 2000 && xpHeroi <= 5000){
        return "Prata";   
    }else if(xpHeroi > 6000 && xpHeroi <= 7000){
        return "Ouro"; 
    }else if(xpHeroi > 7000 && xpHeroi <= 8000){
        return "Platina"; 
    }else if(xpHeroi > 8000 && xpHeroi <= 9000){
        return "Ascendente";   
    }else if(xpHeroi > 9000 && xpHeroi <= 10000){
        return "Imortal"; 
    }else{
        return "Radiante";
    }

}
