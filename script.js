function escolher(opcao) {
  document.getElementById("opcoes").classList.add("hidden")
  document.getElementById("resultado").classList.remove("hidden")

  const texto = document.getElementById("texto-resultado")
  const video = document.getElementById("video-resultado")
  const videoSrc = document.getElementById("video-src")
  const resultIcon = document.getElementById("result-icon")

  if (opcao === 1) {
    texto.innerText = "❌ Má escolha! O piso escorregadio aumenta muito o risco de queda e lesões graves."
    resultIcon.textContent = "⚠️"
    resultIcon.style.color = "#ef4444"
    resultIcon.style.textShadow = "0 0 20px rgba(239, 68, 68, 0.5)"
    videoSrc.src = "videos/acidente.mp4"
  } else if (opcao === 2) {
    texto.innerText = "✓ Excelente decisão! Você eliminou o risco antes da tarefa. Essa é a abordagem segura!"
    resultIcon.textContent = "✓"
    resultIcon.style.color = "#10b981"
    resultIcon.style.textShadow = "0 0 20px rgba(16, 185, 129, 0.5)"
    videoSrc.src = "videos/parabens.mp4"
  } else {
    texto.innerText = "⚡ Parcialmente correto, mas ainda inseguro. A área precisa estar estável primeiro."
    resultIcon.textContent = "⚡"
    resultIcon.style.color = "#f59e0b"
    resultIcon.style.textShadow = "0 0 20px rgba(245, 158, 11, 0.5)"
    videoSrc.src = "videos/quase.mp4"
  }

  video.classList.remove("hidden")
  video.load()
  video.play()
}

function restart() {
  document.getElementById("opcoes").classList.remove("hidden")
  document.getElementById("resultado").classList.add("hidden")
}
