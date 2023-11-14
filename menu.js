document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    const menuItems = [
        { label: "  ", link: "index.html" },
        { label: "News", link: "news.html" },
        { label: "Games", link: "game.html" },
        { label: "Mangás", link: "mangas/mangas.html" },
        { label: "Quiz", link: "quiz/quiz.html" },
        { label: "Mídia Kit", link: "#" },
        { label: "Shop", link: "#" },
    ];

    const menuMobile = [
        { label: "Home", link: "index.html" },
        { label: "News", link: "news.html" },
        { label: "Games", link: "game.html" },
        { label: "Mangás", link: "mangas/mangas.html" },
        { label: "Quiz", link: "quiz/quiz.html" },
        { label: "Mídia Kit", link: "#" },
        { label: "Shop", link: "#" },
    ];

    const desktopMenu = document.getElementById("desktop-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    menuItems.forEach(item => {
        const menuItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.label;
        menuItem.appendChild(link);

        desktopMenu.appendChild(menuItem.cloneNode(true));
    });

    menuMobile.forEach(item => {
        const menuItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.label;
        menuItem.appendChild(link);

        mobileMenu.appendChild(menuItem.cloneNode(true));
    });
});