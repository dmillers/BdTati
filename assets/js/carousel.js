const images = [
    "assets/images/capa1.jpg",
    "assets/images/capa2.jpg",
    "assets/images/capa4.jpg",
    "assets/images/1.jpg",
    "assets/images/3.jpg",
    "assets/images/16.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg",
    "assets/images/9.jpg",
    "assets/images/7.jpg",
    "assets/images/8.jpg",
    "assets/images/12.jpg",
    "assets/images/15.jpg",
    "assets/images/14.jpg",
    "assets/images/17.jpg",
    "assets/images/11.jpg",
    "assets/images/18.jpg",
    "assets/images/19.jpg",
    "assets/images/10.jpg",
    "assets/images/13.jpg",
    "assets/images/capa5.jpg",
    "assets/images/capa6.jpg",
    "assets/images/capa7.jpg",
    "assets/images/capa8.jpg",
    "assets/images/capa9.jpg",
    "assets/images/capa10.jpg",
    "assets/images/capa11.jpg",
    "assets/images/capa12.jpg",
    "assets/images/capa13.jpg",
    "assets/images/capa14.jpg",
    "assets/images/capa15.jpg",
    "assets/images/capa16.jpg",
    "assets/images/capa18.jpg",
    "assets/images/99.jpg",
];

const texts = [
    "Você me permite lhe dar os parabéns juntando um pouquinho de tudo? <br> Nós, Sol, Girassol, Música e claro: FOTOS!",
    "Parabéns pelo seu dia, meu Amor.",
    "Parabéns por ser essa mulher INCRÍVEL que tu és!",
    "Parabéns por ser tão linda",
    "Por ser mãe...",
    "Por ser uma mãe incrível...",
    "Mãe de menino, mãe de bixo...",
    "Né, Dra Dolittle?",
    "Parabéns por ser filha!",
    "E cuidar com tudo que tens...",
    "Parabéns por ser amiga...",
    "Namorada...",
    "Tia...",
    "Parabéns por ser tão estudiosa...",
    "Ser tão aplicada...",
    "Parabéns por sempre buscar ser melhor!",
    "Parabéns pelo excelente trabalho que você presta.",
    "Parabéns por sempre buscar a excelencia",
    "Que chora, se entrega, se preocupa, ama...",
    "E logo em seguida se levanta ^^",
    "E não deixa de se cuidar!",
    "Parabéns por estar sempre se cuidado, não importa onde estivermos. Eu amo isso!<br>Lembra do ladrãozinho? kk",
    "Olha essa perfeição!<br> Obrigado pelas viagens...",
    "VOCÊ É ESTUPIDAMENTE LINDA!<br> Obrigado pelos jantares...",
    "... Pelos lanches, cafés...",
    "Sua beleza é ímpar!",
    "Não podemos deixar de fora nossas pingas, né?<br>Obrigado pela parceria em todos os momentos...",
    "Esse era meu ou era seu?<br>Não importa, né? Nós nos divertimos sempre...",
    "Falando em parceria... Obrigado por me proporcionar momentos ímpares em minha e nossas vidas!",
    "Não sei pq isso está aqui kk <br>Mas obrigado por ser essa mulher moleca...",
    "...Mas também muito dedica e responsável em tudo que faz!",
    "Obrigado por ser essa mulher que ama os detalhes, centrada, mas...",
    "Ao mesmo tempo, muito doida kk",
    "Não podíamos deixar de fora um docinho, né?",
    "OBRIGADO POR TANTO <br> TE AMO",
];

let currentImageIndex = 0;

document.getElementById("next").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("carousel").src = images[currentImageIndex];
    document.getElementById("image-text").innerHTML = texts[currentImageIndex];
});

document.getElementById("prev").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("carousel").src = images[currentImageIndex];
    document.getElementById("image-text").innerHTML = texts[currentImageIndex];
});

const playPauseBtn = document.getElementById("play-pause"); 
const backgroundMusic = document.getElementById("background-music");

playPauseBtn.addEventListener("click", () => { 
    if (backgroundMusic.paused) { 
        backgroundMusic.play(); 
        playPauseBtn.src = "assets/images/icon/2pause.png"; // Altere o ícone para pause 
    
    } else { backgroundMusic.pause();
         playPauseBtn.src = "assets/images/icon/4play.png"; // Altere o ícone para play 
    } 
    }
);
