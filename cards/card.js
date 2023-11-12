function filterImagesByColor(color) {
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        const cardColors = card.getAttribute('data-color').split(' ');
        if (cardColors.includes(color)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterImagesByDeck(deck) {
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        if (card.getAttribute('data-deck') === deck) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterImagesByType(type) {
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        if (card.getAttribute('data-type') === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterImagesByDesign(design) {
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        if (card.getAttribute('data-design') === design) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterImagesByName(name) {
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        const cardName = card.getAttribute('data-name').toLowerCase();
        if (cardName.includes(name.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function expandImage(image) {
    const expandedContainer = document.createElement("div");
    expandedContainer.classList.add("expanded-image");

    const expandedImage = document.createElement("img");
    expandedImage.src = image.querySelector("img").src;
    expandedImage.alt = image.querySelector("img").alt;

    const description = document.createElement("div");
    description.classList.add("expanded-description");
    description.textContent = image.querySelector(".image-description").textContent;

    expandedContainer.appendChild(expandedImage);
    expandedContainer.appendChild(description);

    expandedContainer.addEventListener("click", function () {
        document.body.removeChild(this);
    });

    document.body.appendChild(expandedContainer);
}