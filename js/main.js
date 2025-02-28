function handleClickOnMenuButton() {
    const menu = document.querySelector("menu");
    console.log(menu);
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
}