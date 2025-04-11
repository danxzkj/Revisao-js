// Controle de personagens

let PEpikachu = 80;

let PEcharmander = 80;

// Rodadas

let rodadas = 1;

// Dano dos pokémons, com dano aleatório

let danopika = 0;

let danochar = 0;

// Enquanto vivos devem lutar

while (PEcharmander > 0 && PEpikachu > 0) {

    console.log('Rodada ', rodadas);

    // Dano aleatório
    
    thunderbolt = Math.floor(Math.random() * 25);
    
    flamethrower = Math.floor(Math.random() * 18);

    // Subtrair o dano na vida
    
    PEcharmander = PEcharmander - thunderbolt;
    
    PEpikachu = PEpikachu - flamethrower;

    // Informações do combate
    
    console.log("⛈️ O Pikachu deu ", thunderbolt, " de dano!");
    
    console.log("🔥 O Charmander deu ", flamethrower, " de dano!");

    // Mostrar quanto de vida/energia cada um está
    
    console.log("O Pikachu está com ", PEpikachu, " de vida!");
    
    console.log("O Charmander está com ", PEcharmander, " de vida!");

    // Próxima rodada
    
    rodadas++;
}

// Resultados

if (PEcharmander <= 0 && PEpikachu <= 0){

    console.log("Os dois pokémons não podem mais batalhar, empate!! 🎃");
    
} else if (PEcharmander > PEpikachu) {

    console.log("Pikachu não pode mais batalhar, vitória de Charmander!! 🔥🔥");
    
} else {

    console.log("Charmander não pode mais batalhar, vitória de Pikachu!!! ⛈️⛈️");
}
