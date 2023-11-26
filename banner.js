function isMobile() {
  // Lógica simples para verificar se a largura da tela é menor que 768 pixels
  return window.innerWidth < 768;
}

function changeBanner() {
  // Array com as URLs das imagens de banner mobile
  var images = [
    "https://cdn.discordapp.com/attachments/978050756630433792/1175150509099843665/background-jjk-mobile.jpg",
    "https://cdn.discordapp.com/attachments/978050756630433792/1175150508776890499/background-op-mobile.jpg",
    // Adicione mais URLs de imagens conforme necessário
  ];

  // Array com os links correspondentes a cada banner mobile
  var ads = [
    "https://amzn.to/49AXTL2",
    "https://amzn.to/49JJZqe",
    // Adicione mais URLs de links conforme necessário
  ];

  // Seleciona aleatoriamente uma imagem e seu respectivo link
  var randomIndex = Math.floor(Math.random() * images.length);

  // Atualiza o link no elemento <a> com a classe "banner-link"
  var link = document.getElementById("banner-link");
  link.href = ads[randomIndex];

  // Atualiza a imagem no elemento <img> com o id "mobile-banner-image"
  var mobileBannerImage = document.getElementById("mobile-banner-image");
  mobileBannerImage.src = images[randomIndex];

  // Exibe ou oculta o banner com base no tipo de dispositivo
  var mobileBanner = document.getElementById("mobile-banner");
  mobileBanner.style.display = isMobile() ? "block" : "none";
}

// Adiciona o efeito de parallax no evento de rolagem
window.addEventListener('scroll', function () {
  var mobileBannerImage = document.getElementById("mobile-banner-image");
  var parallaxText = document.getElementById("parallax-text");
  var scrollPosition = window.scrollY;
  mobileBannerImage.style.transform = "translateY(" + scrollPosition * 0.3 + "px)";
  parallaxText.style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
});

// Chama a função quando a página é carregada e sempre que é atualizada
window.onload = function () {
  changeBanner();
  changeBackground();
};