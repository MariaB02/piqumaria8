let palavra;// comprimento da palavra

function setup() {//configurações
  createCanvas(400, 400);//tamanho da tela

  palavra = palavraAleatoria();// palavra aleatória
}

function palavraAleatoria(){
  let palavras = ["Caminhante", "Caminho", "Caminha"];// funcionar palavra aleatória
  return random(palavras);// retorno das palavras
}

function inicializaCores() {// inivializa as cores

  background("white");// cor da tela
  fill("black");//cor da letra
  textSize(64);// tamanho da letra
  textAlign(CENTER, CENTER);//local da letra
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {//desenhar

  inicializaCores();//inicia as cores

  let texto = palavraParcial(0, width);// deixar texto parcial
  text(texto, 200, 200);//local do texto
}
