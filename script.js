const perguntas = [
  {
      imagem: "img/cenario1.png",
      texto: "João precisa subir a uma plataforma molhada para ajustar uma válvula. O que você faria?",
      opcoes: [
          { t: "Subir mesmo assim para ganhar tempo.", r: "errado" },
          { t: "Limpar/sinalizar a área antes de subir.", r: "certo" },
          { t: "Pedir para um colega segurar enquanto sobe.", r: "parcial" }
      ]
  },
  {
      imagem: "img/cenario2.png",
      texto: "Maria vai trocar uma lâmpada mas não desligou o disjuntor. O que fazer?",
      opcoes: [
          { t: "Trocar rápido antes que alguém perceba.", r: "errado" },
          { t: "Desligar o disjuntor antes do trabalho.", r: "certo" },
          { t: "Pedir para alguém segurar a escada.", r: "parcial" }
      ]
  },
  {
      imagem: "img/cenario3.png",
      texto: "Carlos usa uma lixadeira sem óculos de proteção. O que você faria?",
      opcoes: [
          { t: "Avisar para usar EPI antes de continuar.", r: "certo" },
          { t: "Deixar, pois é só um serviço rápido.", r: "errado" },
          { t: "Pedir para manter distância da ferramenta.", r: "parcial" }
      ]
  },
  {
      imagem: "img/cenario4.png",
      texto: "Ana encontrou um cabo elétrico descascado. Qual ação correta?",
      opcoes: [
          { t: "Isolar imediatamente com fita.", r: "parcial" },
          { t: "Reportar e bloquear a área até manutenção.", r: "certo" },
          { t: "Ignorar se não estiver faiscando.", r: "errado" }
      ]
  },
  {
      imagem: "img/cenario5.png",
      texto: "Um produto químico foi derramado. O que fazer?",
      opcoes: [
          { t: "Limpar com pano comum.", r: "errado" },
          { t: "Ver a ficha FISPQ e usar EPI apropriado.", r: "certo" },
          { t: "Chamar alguém com mais experiência.", r: "parcial" }
      ]
  },
  {
      imagem: "img/cenario6.png",
      texto: "Pedro usa fone de ouvido na área industrial. O que fazer?",
      opcoes: [
          { t: "Retirar imediatamente e orientar.", r: "certo" },
          { t: "Ignorar se ele estiver atento.", r: "errado" },
          { t: "Pedir para usar apenas um lado do fone.", r: "parcial" }
      ]
  }
];

const gifs = {
  certo:  "https://media2.giphy.com/media/BrB6VyTMD1qyQ/giphy.gif",
  parcial:"https://media4.giphy.com/media/FIyOndr9jvel8vTHLH/giphy.gif",
  errado: "https://media2.giphy.com/media/wqbAfFwjU8laXMWZ09/giphy.gif"
}

let index = 0;

// ------------------ CARREGAR PERGUNTA ------------------

function carregarPergunta() {
  const p = perguntas[index];

  document.getElementById("cenario-img").src = p.imagem;
  document.getElementById("descricao").innerText = p.texto;

  const box = document.getElementById("opcoes");
  box.innerHTML = "";

  p.opcoes.forEach((op, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-number">${i+1}</span> <span class="option-text">${op.t}</span>`;
      btn.onclick = () => escolher(op.r);
      box.appendChild(btn);
  });

  document.getElementById("resultado").classList.add("hidden");
  box.classList.remove("hidden");
}

// ------------------ RESPOSTA ------------------

function escolher(tipo) {
  document.getElementById("opcoes").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");

  const texto = document.getElementById("texto-resultado");
  const gif = document.getElementById("gif-resultado");

  gif.src = gifs[tipo];
  gif.classList.remove("hidden");

  if (tipo === "certo") {
      texto.innerText = "Excelente! Você escolheu a opção mais segura.";
      document.getElementById("continuar").classList.remove("hidden");
      document.getElementById("reset").classList.add("hidden");
  }
  else if (tipo === "parcial") {
      texto.innerText = "Quase! Você acertou uma parte, mas ainda não é a atitude ideal.";
      document.getElementById("continuar").classList.add("hidden");
      document.getElementById("reset").classList.remove("hidden");
  }
  else {
      texto.innerText = "Resposta incorreta! Tente novamente.";
      document.getElementById("continuar").classList.add("hidden");
      document.getElementById("reset").classList.remove("hidden");
  }
}

// ------------------ CONTINUAR ------------------

function proximaPergunta() {
  index++;

  // TERMINOU AS 6 PERGUNTAS
  if (index >= perguntas.length) {
      document.getElementById("opcoes").classList.add("hidden");
      document.getElementById("resultado").classList.add("hidden");
      document.getElementById("finalizacao").classList.remove("hidden");
      return;
  }

  carregarPergunta();
}


// ------------------ RECOMEÇAR ------------------

function restart() {
  carregarPergunta();
}

window.onload = carregarPergunta;

function reiniciarJogo() {
  index = 0;
  document.getElementById("finalizacao").classList.add("hidden");
  carregarPergunta();
}
