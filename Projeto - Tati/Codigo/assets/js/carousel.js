const images = [
    "assets/images/capa1.jpg",
    "assets/images/capa2.jpg",
    "assets/images/capa4.jpg",
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
  ];
  
  let currentImageIndex = 0;
  
  document.getElementById("next").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("carousel").src = images[currentImageIndex];
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("carousel").src = images[currentImageIndex];
  });
  