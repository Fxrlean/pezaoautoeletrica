const $menuTrigger = document.querySelector("#header__mobile-menu-trigger");
const $menuContainer = document.querySelector("#header__mobile-btn-contents");

let state = 0

$menuTrigger.addEventListener("click", () => {
    switch (state) {
        case 0:
            $menuContainer.classList.remove("hidden")
            $menuContainer.classList.add("block")
            break;

        case 1:
            $menuContainer.classList.remove("block")
            $menuContainer.classList.add("hidden")
            break;
    }

    state == 0 ? state += 1 : state -= 1
})