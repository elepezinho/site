var images = [
    { src: "https://cdn.discordapp.com/attachments/978050756630433792/1130831790219726898/wp-funko.jpg", link: "https://ig.me/m/lpgeekbrasil" },
    { src: "https://cdn.discordapp.com/attachments/978050756630433792/1130831790219726898/wp-funko.jpg", link: "https://ig.me/m/lpgeekbrasil" },
    { src: "https://cdn.discordapp.com/attachments/978050756630433792/1130831790219726898/wp-funko.jpg", link: "https://ig.me/m/lpgeekbrasil" },
    { src: "https://cdn.discordapp.com/attachments/978050756630433792/1130831790219726898/wp-funko.jpg", link: "https://ig.me/m/lpgeekbrasil" },
    { src: "https://cdn.discordapp.com/attachments/978050756630433792/1130831790219726898/wp-funko.jpg", link: "https://ig.me/m/lpgeekbrasil" }
];

var popup = document.getElementById("popup");
var popupImage = document.getElementById("popup-image");
var closeButton = document.querySelector(".close");

function getRandomImage() {
    var randomNumber = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomNumber];
    return selectedImage;
}

function openPopup() {
    var selectedImage = getRandomImage();
    popupImage.src = selectedImage.src;
    var link = document.querySelector(".popup a");
    link.href = selectedImage.link;
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
}

closeButton.addEventListener("click", closePopup);

if (!sessionStorage.getItem("popupShown")) {
    openPopup();
    sessionStorage.setItem("popupShown", true);
}