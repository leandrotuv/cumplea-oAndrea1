
let timeLeft = 15; // 2 minutes in seconds
const timerText = document.getElementById('timer-text');
const timer = setInterval(() => {
  timeLeft--;
  const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	timerText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;


  if (timeLeft === 0) {
    
    clearInterval(timer);
    alert('aplasta aqui para que vea tu regalo!'); // Mensaje al finalizar el cronómetro
    window.location.href = 'index.html';
  }
}, 1000);
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Cambia la imagen cada 4 segundos
}

showSlides();
//particulas animaciones

function openInvitation() {
  const container = document.querySelector('.invitation-container');
  container.classList.add('open');
  setTimeout(() => {
      document.querySelector('.inside').style.display = 'block';
  }, 250);
}


