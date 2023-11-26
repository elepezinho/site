function changeBackground() {
    // Array com as URLs das imagens de fundo
    var images = [
        "https://cdn.discordapp.com/attachments/978050756630433792/1176481072284979271/background-ps5.jpg",
        "https://cdn.discordapp.com/attachments/978050756630433792/1176481073119629365/background-switch.jpg",
        "https://cdn.discordapp.com/attachments/978050756630433792/1176481073811697684/background-xbox.jpg",
        "https://cdn.discordapp.com/attachments/978050756630433792/1176481071307706458/background-naruto.jpg",

    ];

    // Array com os links correspondentes a cada imagem de fundo
    var ads = [
        "https://amzn.to/3SONIwo",
        "https://amzn.to/46jG40l",
        "https://amzn.to/47pEXgQ",
        "https://amzn.to/40MdaEO",
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