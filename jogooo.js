let PEpikachu = 80;
let PEcharmander = 80;

let rodadas = 1;

let danopika = 0;
let danochar = 0;

while(PEcharmander > 0 && PEpikachu > 0){
    console.log('rodadas ', rodadas)

    thunderbolt = Math.floor(Math.random() * 25);
    flamethrower = Math.floor(Math.random() * 18)

    PEcharmander = PEcharmander - thunderbolt
    PEpikachu = PEpikachu - flamethrower

    console.log("⛈️O picachu deu ", thunderbolt, " de dano!");
    console.log("🔥O charmander deu ", flamethrower, " de dano!");

    console.log("O pikachu está com ", PEpikachu, " de vida!");
    console.log("O charmander está com ", PEcharmander, " de vida!");

    rodadas++

}

if(PEcharmander <= 0 && PEpikachu <= 0){
    console.log("Os dois pokemons estão nãopode mais batalhar, empate!!🎃");
} else if (PEcharmander > PEpikachu ){
    console.log("Picachu não pode mais batalhar, vitoria de charmander!!🔥🔥");
} else{
    console.log("Charmander não pode mais batalhar, vitoria de pichachu!!!⛈️⛈️")
}