const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origins: ["https://soccermanager.ifsc.cloud", "https://*.gitpod.io"]
  },
});const PORT = process.env.PORT || 3000;
var jogadores = {
  primeiro: undefined,
  segundo: undefined,
};

// Disparar evento quando jogador entrar na partida
io.on("connection", function (socket) {
  if (jogadores.primeiro === undefined) {
    jogadores.primeiro = socket.id;
  } else if (jogadores.segundo === undefined) {
    jogadores.segundo = socket.id;
  }
  io.emit("jogadores", jogadores);
  console.log("+Lista de jogadores: %s", jogadores);

  // Sinalização de áudio: oferta
  socket.on("offer", (socketId, description) => {
    socket.to(socketId).emit("offer", socket.id, description);
  });

  // Sinalização de áudio: atendimento da oferta
  socket.on("answer", (socketId, description) => {
    socket.to(socketId).emit("answer", description);
  });

  // Sinalização de áudio: envio dos candidatos de caminho
  socket.on("candidate", (socketId, signal) => {
    socket.to(socketId).emit("candidate", signal);
  });

  // Disparar evento quando jogador sair da partida
  socket.on("disconnect", function () {
    if (jogadores.primeiro === socket.id) {
      jogadores.primeiro = undefined;
    }
    if (jogadores.segundo === socket.id) {
      jogadores.segundo = undefined;
    }
    io.emit("jogadores", jogadores);
    console.log("-Lista de jogadores: %s", jogadores);
  });

  socket.on("estadoDoJogador", function (estado) {
    socket.broadcast.emit("desenharOutroJogador", estado);
  });

  //Servidor recebendo a variável para enviar para os jogadores
  socket.on("contagemClube0", (contagemClube0) => {
    socket.broadcast.emit("contagemClube0", contagemClube0);
  });

  socket.on("contagemClube1", (contagemClube1) => {
    socket.broadcast.emit("contagemClube1", contagemClube1);
  });

  //Servidor recebendo a informação de quando começar, acabar e repetir a partida
  socket.on("começarPartida", () => {
    socket.broadcast.emit("começarPartida");
  });
  socket.on("jogarNovamente", () => {
    socket.broadcast.emit("jogarNovamente");
  });
  socket.on("fimDoJogo", () => {
    socket.broadcast.emit("fimDoJogo");
  });

  //Servidor recebendo a informação da posse de bola
  socket.on("posseBola", (posseBola0, posseBola1) => {
    socket.broadcast.emit("fimDoJogo", posseBola0, posseBola1);
  });
  /*
  socket.on("posseBola", (
    //jogo0
    jogo0PosseBola0A, jogo0PosseBola0B, jogo0PosseBola0C, jogo0PosseBola0D, 
    jogo0PosseBola0E, jogo0PosseBola0F, jogo0PosseBola0G, jogo0PosseBola0H, jogo0PosseBola0I, 
    jogo0PosseBola1A, jogo0PosseBola1B, jogo0PosseBola1C, jogo0PosseBola1D, jogo0PosseBola1E, jogo0PosseBola1F, 
    jogo0PosseBola1G, jogo0PosseBola1H, jogo0PosseBola1I) => {
    
    console.log("Server recebendo possebola");
    socket.broadcast.emit("posseBola", jogo0PosseBola0A, jogo0PosseBola0B, jogo0PosseBola0C, jogo0PosseBola0D, 
    jogo0PosseBola0E, jogo0PosseBola0F, jogo0PosseBola0G, jogo0PosseBola0H, jogo0PosseBola0I, 
    jogo0PosseBola1A, jogo0PosseBola1B, jogo0PosseBola1C, jogo0PosseBola1D, jogo0PosseBola1E, jogo0PosseBola1F, 
    jogo0PosseBola1G, jogo0PosseBola1H, jogo0PosseBola1I);
  });
  */
});

app.use(express.static("./"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
