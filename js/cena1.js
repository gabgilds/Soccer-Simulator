var cena1 = new Phaser.Scene("Cena 1");

//Variáveis para o multiplayer
var socket;
var ice_servers = {
  iceServers: [{urls: "stun:stun.l.google.com:19302"}],
};
var localConnection;
var remoteConnection;
var midias;
const audio = document.querySelector("audio");
//Variáveis gerais da cena
var contadorPartidas = 0;
var textoContadorPartidas0;
var textoContadorPartidas1;
var soundtrack;
var botaoTelaCheia;
var teclaF;
//Variáveis da cena de escolher os clubes
var fundo1;
var botao0;
var botao1;
var botao2;
var real0;
var city0;
var bayern0;
var psg0;
var nomeBayern0;
var nomeCity0;
var nomePsg0;
var nomeReal0;
var real1;
var city1;
var bayern1;
var psg1;
var nomeBayern1;
var nomeCity1;
var nomePsg1;
var nomeReal1;
var somMouse;
var contagemClube0 = 0;
var contagemClube1 = 0;
//Variáveis da cena do jogo acontecendo
var fundo2;
var textoCronometro;
var passagemTempo;
var fonteTexto0 = {font: "bold 35px Mont", fill: "#000000"};
var fonteTexto1 = {font: "bold 28px Arial", fill: "#FFFFFF"};
var fonteTexto2 = {font: "bold 28px Mont", fill: "#000000"};
var textoPlacar;
var textoPosseBola;
var posseBola0 = 50;
var posseBola1 = 50;
var jogador2PosseBola0 = 50;
var jogador2PosseBola1 = 50;
var minutos;
var parteEmSegundos;
var tempoInicial;
var time;
var chanceGol;
var gols0 = 0;
var gols1 = 0;
//Variáveis para a posse de bola
var contagem0 = 0;
var jogador;
var tipoDeJogo;
//Variáveis e funções para o funcionamento da partida
var statusBayern = {atk: 92, mid: 85, def: 81, ovr: 84};
var statusPsg = {atk: 89, mid: 83, def: 85, ovr: 86};
var statusCity = {atk: 85, mid: 85, def: 86, ovr: 85};
var statusReal = {atk: 84, mid: 85, def: 83, ovr: 84};
var clube0Escolhido;
var clube1Escolhido;
var forçaClube0Escolhido;
var forçaClube1Escolhido;
var forçaBayern0;
var forçaPsg0;
var forçaCity0;
var forçaReal0;
var forçaBayern1;
var forçaPsg1;
var forçaCity1;
var forçaReal1;
//Variáveis da cena do fim de jogo
var fundo3;
var parabensBayern0;
var parabensCity0;
var parabensPsg0;
var parabensReal0;
var parabensBayern1;
var parabensCity1;
var parabensPsg1;
var parabensReal1;
var somVencedor;
var muller;
var deBruyne;
var benzema;
var neymar;
var botaoSim;
var botaoNao;
var botaoJogarDeNovo;
//Funções da cena de escolher os clubes
function escolhaBayern0() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(true);
  nomeBayern0.setVisible(true);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  forçaClube0Escolhido = forçaBayern0;
  clube0Escolhido = "bayern";
}
function escolhaPsg0() {
  psg0.setVisible(true);
  nomePsg0.setVisible(true);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  forçaClube0Escolhido = forçaPsg0;
  clube0Escolhido = "psg";
}
function escolhaCity0() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(true);
  nomeCity0.setVisible(true);
  forçaClube0Escolhido = forçaCity0;
  clube0Escolhido = "city";
}
function escolhaReal0() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(true);
  nomeReal0.setVisible(true);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  forçaClube0Escolhido = forçaReal0;
  clube0Escolhido = "real";
}
function escolhaPsg1() {
  psg1.setVisible(true);
  nomePsg1.setVisible(true);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
  forçaClube1Escolhido = forçaPsg1;
  clube1Escolhido = "psg";
}
function escolhaBayern1() {
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(true);
  nomeBayern1.setVisible(true);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
  forçaClube1Escolhido = forçaBayern1;
  clube1Escolhido = "bayern";
}
function escolhaCity1() {
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(true);
  nomeCity1.setVisible(true);
  forçaClube1Escolhido = forçaCity1;
  clube1Escolhido = "city";
}
function escolhaReal1() {
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(true);
  nomeReal1.setVisible(true);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
  forçaClube1Escolhido = forçaReal1;
  clube1Escolhido = "real";
}
//Função para retirar todos os nomes dos clubes da tela
function retirarTodosNomesClubes() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
}
//Função para deixar a tela preta
function apagarTela() {
  fundo1.setVisible(false);
  fundo2.setVisible(false);
  fundo3.setVisible(false);
  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);
  botaoSim.setVisible(false);
  botaoNao.setVisible(false);
  botaoJogarDeNovo.setVisible(false);
  muller.setVisible(false);
  neymar.setVisible(false);
  benzema.setVisible(false);
  deBruyne.setVisible(false);
  parabensBayern0.setVisible(false);
  parabensBayern1.setVisible(false);
  parabensCity0.setVisible(false);
  parabensCity1.setVisible(false);
  parabensPsg0.setVisible(false);
  parabensPsg1.setVisible(false);
  parabensReal0.setVisible(false);
  parabensReal1.setVisible(false);
  retirarTodosNomesClubes();
  botaoTelaCheia.setVisible(false);
  textoContadorPartidas0.setVisible(false);
  textoContadorPartidas1.setVisible(false);
}
//Função para definir os clubes que aparecem por padrão
function escolhaClubePadrao() {
  escolhaBayern0();
  escolhaCity1();
}
//Funções para mostrar as telas do jogo
function aparecerFundo1() {
  fundo1.setVisible(true);
  fundo2.setVisible(false);
  fundo3.setVisible(false);
  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);
  botaoSim.setVisible(false);
  botaoNao.setVisible(false);
  botaoJogarDeNovo.setVisible(false);
  muller.setVisible(false);
  neymar.setVisible(false);
  benzema.setVisible(false);
  deBruyne.setVisible(false);
  parabensBayern0.setVisible(false);
  parabensBayern1.setVisible(false);
  parabensCity0.setVisible(false);
  parabensCity1.setVisible(false);
  parabensPsg0.setVisible(false);
  parabensPsg1.setVisible(false);
  parabensReal0.setVisible(false);
  parabensReal1.setVisible(false);
  //Deixando apenas o botão específico do player escolher o seu clube
  if (jogador === 1) {
    botao1.setVisible(true);
  } else if (jogador === 2) {
    botao2.setVisible(true);
  }
}
function aparecerFundo2() {
  fundo1.setVisible(false);
  fundo2.setVisible(true);
  botao0.setVisible(false);
  botao1.setVisible(false);
  botao2.setVisible(false);
  textoCronometro.setVisible(true);
  textoPlacar.setVisible(true);
  textoPosseBola.setVisible(true);
  //<--- Iniciando o cronômetro --->
  //Define o tempo inicial
  tempoInicial = 0;
  passagemTempo = time.addEvent({
    delay: 80,
    callback: function () {
      //A cada x ms (delay) adiciona 15 segundos do tempo inicial
      tempoInicial += 15; 
      textoCronometro.setText(formatarTempo(tempoInicial));
      if (jogador === 1) {
        //Fim da partida
        if (tempoInicial === 5400) {
          aparecerFundo3();          
        }

        //Atualização da posse de bola
        if (tempoInicial % 495 === 0) {
          atualizarPosseBola();
        }

        //Atualização e criação dos valores do placar do jogo pelo jogador 1
      
        if (tempoInicial % 120 === 0) {
          //Possibilidade de ocorrer um gol
          chanceGol = Phaser.Math.Between(0, 20); 

          //Se o gol ocorrer, atualiza o placar
          if (chanceGol === 1) {
            atualizarPlacar();
          }

          //Se não tiver ocorrido nenhum gol durante a partida
          if (tempoInicial === 4800 && gols0 === 0 && gols1 === 0) {
            if (forçaClube0Escolhido > forçaClube1Escolhido) {
              gols0++;
              //Enviando valores gols para player 2
              socket.emit("gols", gols0, gols1);
              //Atualiza os valores do placar
              textoPlacar.setText(gols0 + "     " + gols1); 
            } else if (forçaClube0Escolhido < forçaClube1Escolhido) {
              gols1++;
              socket.emit("gols", gols0, gols1);
              textoPlacar.setText(gols0 + "     " + gols1);
            } else if (forçaClube0Escolhido === forçaClube1Escolhido) {
              gols0++;
              socket.emit("gols", gols0, gols1);
              textoPlacar.setText(gols0 + "     " + gols1);
            }
          }
        }
      }
    },
    callbackScope: this,
    loop: true,
  });
  //Aleatoriedade para definir o tipo de jogo que vai ocorrer, uma goleada, jogo pegado, virada
  tipoDeJogo = Phaser.Math.Between(0, 10);
}
function aparecerFundo3() {
  fundo2.setVisible(false);
  fundo3.setVisible(true);
  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);
  botaoJogarDeNovo.setVisible(true);
  //Coloca os botões específicos para cada player
  if (jogador === 1) {
    botaoSim.setVisible(true);
    botaoNao.setVisible(true);
    //Envia a mensagem para o player 2 finalizar a partida
    socket.emit("fimDaPartida");
  } else if (jogador === 2) {
    botaoSim.setVisible(false);
    botaoNao.setVisible(false);
  }
  //Toca o som da tela de vitória, retira todas as informações do clube e o soundtrack
  somVencedor.play();
  soundtrack.pause();
  retirarTodosNomesClubes();
  //Definindo o resultado da partida
  if (gols0 > gols1) {
    clube0vencendo();
  } else if (gols0 < gols1) {
    clube1vencendo();
  } else if (gols0 === gols1) { //Por enquanto não tem empate
    clube0vencendo();
  }
  //<--- Resetando as variáveis necessárias e o tempo para conseguir rejogar --->
  //Evita que tenha 2 ou mais cronômetros funcionando simultaneamente
  time.removeEvent(passagemTempo);
  posseBola0 = 50;
  posseBola1 = 50;
  textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%"); //Atualiza os valores de posse de bola inciais
  gols0 = 0;
  gols1 = 0;
  textoPlacar.setText(gols0 + "     " + gols1); 
  contagem0 = 0;
}
//Função quando clica em jogar novamente
function aparecerFundo1Novamente() {
  if (contadorPartidas !== 4) {
    if (jogador === 1) {
      //Definindo a força dos clubes de novo para definir o resultado da nova partida
      definindoForçaClubes();
      botao0.setVisible(true);
      botao1.setVisible(true);
    } else if (jogador === 2) {
      botao2.setVisible(true);
    }
    //Coloca as imagens corretas
    fundo1.setVisible(true);
    fundo2.setVisible(false);
    fundo3.setVisible(false);
    textoCronometro.setVisible(false);
    textoPlacar.setVisible(false);
    textoPosseBola.setVisible(false);
    botaoSim.setVisible(false);
    botaoNao.setVisible(false);
    botaoJogarDeNovo.setVisible(false);
    muller.setVisible(false);
    neymar.setVisible(false);
    benzema.setVisible(false);
    deBruyne.setVisible(false);
    parabensPsg0.setVisible(false);
    parabensBayern0.setVisible(false);
    parabensCity0.setVisible(false);
    parabensReal0.setVisible(false);
    parabensPsg1.setVisible(false);
    parabensBayern1.setVisible(false);
    parabensCity1.setVisible(false);
    parabensReal1.setVisible(false);
    //Colocando a soundtrack correta
    somVencedor.pause();
    soundtrack.play();
    //Coloca os clubes que aparecem primeiro para serem escolhidos
    escolhaClubePadrao();
    //Adicionando valor no contador de partidas
    contadorPartidas++;
    textoContadorPartidas1.setText(contadorPartidas);
  } else if (contadorPartidas === 4) {
    apagarTela();
  }
}
function clube0vencendo() {
  //Aqui vai ser o decorrer da partida que no final o clube da esquerda vai ganhar, com aleatoriedades
  if (clube0Escolhido === "psg") {
    parabensPsg0.setVisible(true);
    neymar.setVisible(true);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube0Escolhido === "bayern") {
    parabensBayern0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(true);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube0Escolhido === "city") {
    parabensCity0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(true);
    benzema.setVisible(false);
  } else if (clube0Escolhido === "real") {
    parabensReal0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(true);
  }
}
function clube1vencendo() {
  //Decorrer da partida que no final o clube da direita vai ganhar, com aleatoriedades
  if (clube1Escolhido === "psg") {
    parabensPsg1.setVisible(true);
    neymar.setVisible(true);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube1Escolhido === "bayern") {
    parabensBayern1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(true);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube1Escolhido === "city") {
    parabensCity1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(true);
    benzema.setVisible(false);
  } else if (clube1Escolhido === "real") {
    parabensReal1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(true);
  }
}
//Definindo os valores que serão usados na partida para decidir o vencedor, adicionado a um valor aleatório
function definindoForçaClubes() {
  forçaBayern0 = statusBayern.atk + Phaser.Math.Between(0, 10);
  forçaPsg0 = statusPsg.atk + Phaser.Math.Between(0, 10);
  forçaCity0 = statusCity.atk + Phaser.Math.Between(0, 10);
  forçaReal0 = statusReal.atk + Phaser.Math.Between(0, 10);
  forçaBayern1 = statusBayern.atk + Phaser.Math.Between(0, 10);
  forçaPsg1 = statusPsg.atk + Phaser.Math.Between(0, 10);
  forçaCity1 = statusCity.atk + Phaser.Math.Between(0, 10);
  forçaReal1 = statusReal.atk + Phaser.Math.Between(0, 10);
}
//Função para o cronômetro funcionar
function formatarTempo(segundos) {
  //Minutos
  minutos = Math.floor(segundos / 60);
  //Segundos
  parteEmSegundos = segundos % 60;
  //Adiciona zeros à esquerda para os segundos
  parteEmSegundos = parteEmSegundos.toString().padStart(2, "0");
  //Retorna o tempo formato para a função
  return `${minutos} : ${parteEmSegundos}`;
}
function atualizarPosseBola() {
  //Determina os valores de posse de bola dos clubes, fazendo com que quanto mais o jogo passa, menos varia a posse de bola
  if (jogador === 1) {
    if (contagem0 < 3) {
      posseBola0 = Phaser.Math.Between(35, 65);
      posseBola1 = 100 - posseBola0;
      textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%"); //Atualiza os valores de posse de bola
    } else if (2 < contagem0 < 6) {
      posseBola0 = Phaser.Math.Between(45, 55);
      posseBola1 = 100 - posseBola0;
      textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%"); 
    } else if (contagem0 > 5) {
      posseBola0 = Phaser.Math.Between(47, 53);
      posseBola1 = 100 - posseBola0;
      textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%"); 
    }
    contagem0++;
    //Envia as variáveis de posse de bola do player 1
    socket.emit("posseBola", posseBola0, posseBola1);
  }
} 
function atualizarPlacar() {
  //Se o clube0 for mais forte
  if (forçaClube0Escolhido > forçaClube1Escolhido) { 
    //Vitória fácil do clube vencedor
    if (tipoDeJogo > 2) {
      if (gols0 < 2) {
        gols0++;
        socket.emit("gols", gols0, gols1);
        //Atualiza os valores do placar
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Zebra que pode ser uma virada do clube mais forte se der tempo
    if (tipoDeJogo === 0) {
      if (gols1 < 2) {
        gols1++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      } else if (gols0 < gols1) {
        gols0++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Goleada do clube vencedor
    if (tipoDeJogo === 1) {
      if (gols0 < 5) {
        gols0++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Vitória no final do jogo
    if (tipoDeJogo === 2) {
      //Não precisa fazer nada, o código já está feito no evento "passagemTempo"
    }
  } else if (forçaClube0Escolhido < forçaClube1Escolhido) {
    //Vitória tranquila do clube vencedor
    if (tipoDeJogo > 2) {
      if (gols1 < 2) {
        gols1++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Virada do clube vencedor
    if (tipoDeJogo === 0) {
      if (gols0 < 2) {
        gols0++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      } else if (gols1 < gols0) {
        gols1++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Goleada do clube vencedor
    if (tipoDeJogo === 1) {
      if (gols1 < 5) {
        gols1++;
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Vitória no final do jogo
    if (tipoDeJogo === 2) {
      //Não precisa fazer nada, o código já está feito no cena1.update
    }
    //Se tiver um empate nas forças, por enquanto o clube0 ganha
  } else if (forçaClube0Escolhido === forçaClube1Escolhido) { 
    //Vitória tranquila do clube vencedor
    if (tipoDeJogo > 2) {
      if (gols0 < 2) {
        gols0++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Virada do clube vencedor
    if (tipoDeJogo === 0) {
      if (gols1 < 2) {
        gols1++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      } else if (gols0 < gols1) {
        gols0++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Goleada do clube vencedor
    if (tipoDeJogo === 1) {
      if (gols0 < 5) {
        gols0++;
        socket.emit("gols", gols0, gols1);
        textoPlacar.setText(gols0 + "     " + gols1);
      }
    }
    //Vitória no final do jogo
    if (tipoDeJogo === 2) {
      //Não precisa fazer nada, o código já está feito no cena1.update
    }
  }
}
cena1.preload = function () {
  //Carregando as imagens gerais que serão usados na cena1
  this.load.image(
    "textoContadorPartidas",
    "./assets/texto/textoContadorPartidas.png"
  );
  this.load.audio("soundtrack", "./assets/soundtrack.mp3");
  this.load.spritesheet("botaoTelaCheia", "./assets/botaoTelaCheia.png", {
    frameWidth: 50,
    frameHeight: 50,
  });
  //Carregando as imagens e áudio que serão usados na cena de escolhendo os clubes
  this.load.image("fundo1", "./assets/fundo1.png");
  this.load.image("botao0", "./assets/botao0.png");
  this.load.image("real", "./assets/clubes/real.png");
  this.load.image("city", "./assets/clubes/city.png");
  this.load.image("psg", "./assets/clubes/psg.png");
  this.load.image("bayern", "./assets/clubes/bayern.png");
  this.load.image("botao1", "./assets/botao1.png");
  this.load.image("nomeReal", "./assets/clubes/nomeReal.png");
  this.load.image("nomeCity", "./assets/clubes/nomeCity.png");
  this.load.image("nomePsg", "./assets/clubes/nomePsg.png");
  this.load.image("nomeBayern", "./assets/clubes/nomeBayern.png");
  this.load.audio("somMouse", "./assets/somMouse.mp3");
  //Carregando as imagens e áudio que serão usados na cena do jogo
  this.load.image("fundo2", "./assets/fundo2.png");
  //Carregando as imagens e áudio que serão usados na cena de fim do jogo
  this.load.image("fundo3", "./assets/fundo3.png");
  this.load.image("bayern0", "./assets/clubes/parabens/bayern0.png");
  this.load.image("bayern1", "./assets/clubes/parabens/bayern1.png");
  this.load.image("city0", "./assets/clubes/parabens/city0.png");
  this.load.image("city1", "./assets/clubes/parabens/city1.png");
  this.load.image("psg0", "./assets/clubes/parabens/psg0.png");
  this.load.image("psg1", "./assets/clubes/parabens/psg1.png");
  this.load.image("real0", "./assets/clubes/parabens/real0.png");
  this.load.image("real1", "./assets/clubes/parabens/real1.png");
  this.load.audio("somVencedor", "./assets/somVencedor.mp3");
  this.load.spritesheet("muller", "./assets/clubes/jogadores/muller.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.spritesheet("neymar", "./assets/clubes/jogadores/neymar.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.spritesheet("deBruyne", "./assets/clubes/jogadores/deBruyne.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.spritesheet("benzema", "./assets/clubes/jogadores/benzema.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.image("botaoJogarDeNovo", "./assets/texto/botaoJogarDeNovo.png");
  this.load.image("botaoSim", "./assets/texto/botaoSim.png");
  this.load.image("botaoNao", "./assets/texto/botaoNao.png");
};
cena1.create = function () {
  //Definindo a força dos clubes para definir o resultado da partida
  definindoForçaClubes();
  //Deixando a variável tempo utilizável para o cena1
  time = this.time;
  //Colocando a musica no jogo
  soundtrack = this.sound.add("soundtrack");
  soundtrack.loop = true;
  soundtrack.play();
  //Definindo as imagens de fundo da cena de escolhendo os clubes, da partida e do fim do jogo
  fundo1 = this.add.image(400, 300, "fundo1");
  fundo2 = this.add.image(400, 300, "fundo2");
  fundo3 = this.add.image(400, 300, "fundo3");
  //<--- Cena de escolhendo os clubes --->
  //Define e adiciona os botões da cena1
  botao0 = this.add.image(400, 300, "botao0").setInteractive().setVisible(false);
  botao1 = this.add.image(280, 70, "botao1").setInteractive().setVisible(false);
  botao2 = this.add.image(735, 70, "botao1").setInteractive().setVisible(false);
  //Colocando os textos de seleção dos clubes do lado esquerdo
  real0 = this.add.image(110, 70, "real");
  city0 = this.add.image(100, 70, "city");
  psg0 = this.add.image(94, 70, "psg");
  bayern0 = this.add.image(145, 70, "bayern");
  nomeBayern0 = this.add.image(173, 335, "nomeBayern");
  nomeCity0 = this.add.image(175, 335, "nomeCity");
  nomePsg0 = this.add.image(175, 335, "nomePsg");
  nomeReal0 = this.add.image(170, 335, "nomeReal");
  //Colocando os textos de seleção dos clubes do lado direito
  real1 = this.add.image(566, 70, "real");
  city1 = this.add.image(553, 70, "city");
  psg1 = this.add.image(552, 70, "psg");
  bayern1 = this.add.image(600, 70, "bayern");
  nomeBayern1 = this.add.image(628, 335, "nomeBayern");
  nomeCity1 = this.add.image(630, 335, "nomeCity");
  nomePsg1 = this.add.image(629, 335, "nomePsg");
  nomeReal1 = this.add.image(625, 335, "nomeReal");
  //Colocando os textos de vitórias de cada clube
  parabensBayern0 = this.add.image(400, 105, "bayern0");
  parabensBayern1 = this.add.image(400, 105, "bayern1");
  parabensCity0 = this.add.image(400, 105, "city0");
  parabensCity1 = this.add.image(400, 105, "city1");
  parabensPsg0 = this.add.image(400, 100, "psg0");
  parabensPsg1 = this.add.image(400, 100, "psg1");
  parabensReal0 = this.add.image(400, 100, "real0");
  parabensReal1 = this.add.image(400, 100, "real1");
  //Colocando o som do mouse para sair clicar nos botões
  somMouse = this.sound.add("somMouse");
  //Colocando o contador de partidas jogadas
  textoContadorPartidas0 = this.add.image(630, 580, "textoContadorPartidas");
  textoContadorPartidas1 = this.add.text(732, 564, "0", fonteTexto1);
  //Botão de ativar/desativar tela cheia
  botaoTelaCheia = this.add
    .image(55, 600 - 55, "botaoTelaCheia", 0)
    .setOrigin(1, 0)
    .setInteractive()
    .setScrollFactor(0);
  botaoTelaCheia.on(
    "pointerup",
    function () {
      if (this.scale.isFullscreen) {
        botaoTelaCheia.setFrame(0);
        this.scale.stopFullscreen();
      } else {
        botaoTelaCheia.setFrame(1);
        this.scale.startFullscreen();
      }
    },
    this
  );
  //Tecla "F" ativa/desativa tela cheia
  teclaF = this.input.keyboard.addKey("F");
  teclaF.on(
    "down",
    function () {
      if (this.scale.isFullscreen) {
        botaoTelaCheia.setFrame(0);
        this.scale.stopFullscreen();
      } else {
        botaoTelaCheia.setFrame(1);
        this.scale.startFullscreen();
      }
    },
    this
  );
  //<--- Cena do jogo acontecendo --->
  //Adiciona o cronômetro
  textoCronometro = this.add.text(
    356,
    170,
    formatarTempo(this.tempoInicial),
    fonteTexto0
  );
  //Adiciona o placar
  textoPlacar = this.add.text(360, 287, gols0 + "     " + gols1, fonteTexto0);
  //Adiciona o texto da posse de bola
  textoPosseBola = this.add.text(342, 462, "50%  50%", fonteTexto2);
  //<--- Cena do fim do jogo --->
  //Botões para jogar novamente
  botaoSim = this.add.image(360, 580, "botaoSim").setInteractive();
  botaoNao = this.add.image(440, 580, "botaoNao").setInteractive();
  botaoJogarDeNovo = this.add.image(180, 580, "botaoJogarDeNovo");
  //Animação dos vencedores
  muller = this.physics.add.sprite(600, 450, "muller");
  neymar = this.physics.add.sprite(600, 450, "neymar");
  deBruyne = this.physics.add.sprite(600, 450, "deBruyne");
  benzema = this.physics.add.sprite(600, 450, "benzema");
  this.anims.create({
    key: "vitoriaMuller",
    frames: this.anims.generateFrameNumbers("muller", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  this.anims.create({
    key: "vitoriaNeymar",
    frames: this.anims.generateFrameNumbers("neymar", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  this.anims.create({
    key: "vitoriaDeBruyne",
    frames: this.anims.generateFrameNumbers("deBruyne", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  this.anims.create({
    key: "vitoriaBenzema",
    frames: this.anims.generateFrameNumbers("benzema", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  //Ativando as animações
  muller.anims.play("vitoriaMuller", true);
  deBruyne.anims.play("vitoriaDeBruyne", true);
  benzema.anims.play("vitoriaBenzema", true);
  neymar.anims.play("vitoriaNeymar", true);
  //Colocando o som final
  somVencedor = this.sound.add("somVencedor");
  somVencedor.loop = true;
  //Mostra no início apenas a tela de escolha de clubes e os dois primeiros clubes
  aparecerFundo1();
  escolhaClubePadrao();

  //Conectar ao servidor do Heroku via socket.io (WebSocket). Link do Heroku: "https://secure-meadow-69283.herokuapp.com/"
  socket = io("https://secure-meadow-69283.herokuapp.com/"); 
  
  //Defindo os players e a comunicação
  socket.on("jogadores", function (jogadores) { 
    //Dispara evento quando player entrar na partida
    if (jogadores.primeiro === socket.id) { 
      //Define o primeiro player
      jogador = 1;
      //Estabelece a comunicação
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          midias = stream;
        })
        .catch((error) => console.log(error));
    } else if (jogadores.segundo === socket.id) {
      //Define o segundo player
      jogador = 2;

      //Conectando a comunicação dos players
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          midias = stream;
          localConnection = new RTCPeerConnection(ice_servers);
          midias
            .getTracks()
            .forEach((track) => localConnection.addTrack(track, midias));
          localConnection.onicecandidate = ({ candidate }) => {
            candidate &&
              socket.emit("candidate", jogadores.primeiro, candidate);
          };
          console.log(midias);
          localConnection.ontrack = ({ streams: [midias] }) => {
            audio.srcObject = midias;
          };
          localConnection
            .createOffer()
            .then((offer) => localConnection.setLocalDescription(offer))
            .then(() => {
              socket.emit(
                "offer",
                jogadores.primeiro,
                localConnection.localDescription
              );
            });
        })
        .catch((error) => console.log(error));
    }
    //Player 1 comanda o jogo e envia os valores para o outro player apresentar
    if (jogador === 1) {
      //Sicronizando as escolhas dos clubes da direita
      socket.on("contagemClube1", (contagemClube1) => {
        if (contagemClube1 === 0) {
          escolhaBayern1();
        } else if (contagemClube1 === 1) {
          escolhaReal1();
        } else if (contagemClube1 === 2) {
          escolhaCity1();
        } else if (contagemClube1 === 3) {
          escolhaPsg1();
        }
      })
      //Mostra os players conectados
      console.log(jogadores); 
      //Os dois players precisam estar conectados para o jogo começar
      if (jogadores.primeiro !== undefined && jogadores.segundo !== undefined) {
        botao0.setVisible(true);
      } else if (jogadores.primeiro === undefined || jogadores.segundo === undefined) {
        botao0.setVisible(false);
        botao1.setVisible(false);
        botao2.setVisible(false);
      }
    //Player 1 cria o jogo e envia para o outro player apresentar
    } else if (jogador === 2) {
      //Sicronizando as escolhas dos clubes da esquerda
      socket.on("contagemClube0", (contagemClube0) => {
        if (contagemClube0 === 0) {
          escolhaBayern0();
        } else if (contagemClube0 === 1) {
          escolhaReal0();
        } else if (contagemClube0 === 2) {
          escolhaCity0();
        } else if (contagemClube0 === 3) {
          escolhaPsg0();
        }
      })
      //Recebendo o comunicado do player 1 para começar a partida
      socket.on("comecarPartida", () => {
        aparecerFundo2();
      });
      socket.on("fimDaPartida", () => {
        aparecerFundo3();
      });
      //Recebendo o comunicado do player 1 para rejogar a partida
      socket.on("jogarNovamente", () => {
        aparecerFundo1Novamente();
      });
      //Recebendo o comunicado do player 1 para acabar com a partida
      socket.on("fimDoJogo", () => {
        apagarTela();
      }); 
      //Atualizando os valores de gols e posse de bola gerados pelo player 1
      socket.on("gols", (gols0, gols1) => {
        textoPlacar.setText(gols0 + "     " + gols1);
      });
      socket.on("posseBola", (posseBola0, posseBola1) => {
        textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%");
      });
    } 
  });
  //Recebendo as informações para estabelecer a comunicação 
  socket.on("offer", (socketId, description) => {
    remoteConnection = new RTCPeerConnection(ice_servers);
    midias
      .getTracks()
      .forEach((track) => remoteConnection.addTrack(track, midias));
    remoteConnection.onicecandidate = ({ candidate }) => {
      candidate && socket.emit("candidate", socketId, candidate);
    };
    remoteConnection.ontrack = ({ streams: [midias] }) => {
      audio.srcObject = midias;
    };
    remoteConnection
      .setRemoteDescription(description)
      .then(() => remoteConnection.createAnswer())
      .then((answer) => remoteConnection.setLocalDescription(answer))
      .then(() => {
        socket.emit("answer", socketId, remoteConnection.localDescription);
      });
  });
  socket.on("answer", (description) => {
    localConnection.setRemoteDescription(description);
  });
  socket.on("candidate", (candidate) => {
    const conn = localConnection || remoteConnection;
    conn.addIceCandidate(new RTCIceCandidate(candidate));
  });
  //Fazendo a escolha dos clubes da esquerda por meio dos botões
  botao1.on("pointerdown", function () {
    //Som de click do mouse
    somMouse.play();
    //Escolhando os clubes
    switch (contagemClube0) {
      case 0:
        escolhaBayern0();
        break;

      case 1:
        escolhaReal0();
        break;

      case 2:
        escolhaCity0();
        break;

      case 3:
        escolhaPsg0();
        break;
    }
    //Envia o clube escolhido para o player 2
    socket.emit("contagemClube0", contagemClube0);
    contagemClube0++;
    contagemClube0 = contagemClube0 % 4;
  });
  //Fazendo a escolha dos clubes da direita por meio dos botões
  botao2.on("pointerdown", function () {
    //Som de click do mouse
    somMouse.play();
    //Escolhando os clubes
    switch (contagemClube1) {
      case 0:
        escolhaBayern1();
        break;

      case 1:
        escolhaReal1();
        break;

      case 2:
        escolhaCity1();
        break;

      case 3:
        escolhaPsg1();
        break;
    }
    //Envia o clube escolhido para o player 1
    socket.emit("contagemClube1", contagemClube1);   
    contagemClube1++;
    contagemClube1 = contagemClube1 % 4;
  });
  //Adicionando os botões de sim e não de jogar novamente
  botaoSim.on(
    "pointerdown",
    function () {
      //Volta para escolher os clubes para jogar a partida novamente
      aparecerFundo1Novamente();
      //Envia o comunicado para o player 2 jogar novamente
      socket.emit("jogarNovamente");
    },
    this
  );
  botaoNao.on(
    "pointerdown",
    function () {
      //Finaliza o jogo
      fundo1.setVisible(false);
      fundo2.setVisible(false);
      fundo3.setVisible(false);
      textoCronometro.setVisible(false);
      textoPlacar.setVisible(false);
      textoPosseBola.setVisible(false);
      botaoSim.setVisible(false);
      botaoNao.setVisible(false);
      botaoJogarDeNovo.setVisible(false);
      muller.setVisible(false);
      neymar.setVisible(false);
      benzema.setVisible(false);
      deBruyne.setVisible(false);
      parabensBayern0.setVisible(false);
      parabensBayern1.setVisible(false);
      parabensCity0.setVisible(false);
      parabensCity1.setVisible(false);
      parabensPsg0.setVisible(false);
      parabensPsg1.setVisible(false);
      parabensReal0.setVisible(false);
      parabensReal1.setVisible(false);
      retirarTodosNomesClubes();
      botaoTelaCheia.setVisible(false);
      textoContadorPartidas0.setVisible(false);
      textoContadorPartidas1.setVisible(false);
      somVencedor.pause();
      //Envia o comunicado para o player 2 encerrar a partida
      socket.emit("fimDoJogo");
    },
    this
  );
  //Clique do botão para ir para a próxima tela
  botao0.on(
    "pointerdown",
    function () {
      //Inicia a partida
      aparecerFundo2();
      socket.emit("comecarPartida");
    },
    this
  );
};
cena1.update = function () {};
export { cena1 };