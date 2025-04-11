//controle de personagens
let PEpikachu = 80;
let PEcharmander = 80;

//rodadas
let rodadas = 1;

//dano dos pokemons, com dano aleatorio 
let danopika = 0;
let danochar = 0;

//enquanto vivos devem lutar
while(PEcharmander > 0 && PEpikachu > 0){
    console.log('rodadas ', rodadas)

    //dano aleatorio ne
    flamethrower = Math.floor(Math.random() * 25);
    thunderbolt = Math.floor(Math.random() * 18)

    //subtrair o dano na vida
    PEcharmander = PEcharmander - danopika
    PEpikachu = PEpikachu - danochar

    //irformações né
    console.log("⛈️O picachu deu ", danopika, " de dano!");
    console.log("🔥O charmander deu ", danochar, " de dano!");

    //mostrar quanto de vida/energia cada um está
    console.log("O pikachu está com ", PEpikachu, " de vida!");
    console.log("O charmander está com ", PEcharmander, " de vida!");

    //proxima rodada ne
    rodadas++

}

//Resultados ne
if(PEcharmander <= 0 && PEpikachu <= 0){
    console.log("Os dois pokemons estão nãopode mais batalhar, empate!!🎃");
} else if (PEcharmander > PEpikachu ){
    console.log("Picachu não pode mais batalhar, vitoria de charmander!!🔥🔥");
} else{
    console.log("Charmander não pode mais batalhar, vitoria de pichachu!!!⛈️⛈️")
}