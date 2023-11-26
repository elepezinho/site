function isMobile() {
  // Lógica simples para verificar se a largura da tela é menor que 768 pixels
  return window.innerWidth < 768;
}

function changeBanner() {
  // Array com as URLs das imagens de banner mobile
  var images = [
    "https://cdn.discordapp.com/attachments/978050756630433792/1176481072725372949/background-ps5-mobile.jpg",
    "https://cdn.discordapp.com/attachments/978050756630433792/1176481073471967303/background-switch-mobile.jpg",
    "https://cdn.discordapp.com/attachments/978050756630433792/1176481074092707850/background-xbox-mobile.jpg",
    "https://cdn.discordapp.com/attachments/978050756630433792/1176481071672602714/background-naruto-mobile.jpg",
    // Adicione mais URLs de imagens conforme necessário
  ];

  // Array com os links correspondentes a cada banner mobile
  var ads = [
    "https://amzn.to/3SONIwo",
    "https://amzn.to/46jG40l",
    "https://amzn.to/47pEXgQ",
    "https://amzn.to/40MdaEO",
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