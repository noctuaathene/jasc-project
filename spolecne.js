const openMenu = document.querySelector("#menu-tlacitko")

openMenu.addEventListener('click', () => {
    const menuHeader = document.querySelector("#menu-polozky")
    menuHeader.classList.toggle('show')
}
)