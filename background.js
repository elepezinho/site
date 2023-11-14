function changeBackground() {
    // Array com as URLs das imagens de fundo
    var images = [
        "https://cdn.discordapp.com/attachments/978050756630433792/1174096332642865183/background-jjk.jpg",
        "https://cdn.discordapp.com/attachments/978050756630433792/1174096332642865183/background-jjk.jpg",

    ];

    // Array com os links correspondentes a cada imagem de fundo
    var ads = [
        "https://amzn.to/49AXTL2",
        "https://amzn.to/49AXTL2",
    ];

    // Seleciona aleatoriamente uma imagem de fundo e seu respectivo link
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];

    // Define a imagem de fundo no corpo da página
    document.body.style.backgroundImage = "url('" + selectedImage + "')";

    // Atualiza o link no elemento <a> com a classe "background-link"
    var link = document.getElementById("background-link");
    link.href = ads[randomIndex];
}