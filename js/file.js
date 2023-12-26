ref_aside_menu = document.getElementById("aside_menu");
ref_expend_button = document.getElementById("expend_button");

document.getElementById("expend_button").addEventListener("click", onClick_expend_button);

function onClick_expend_button(e) {
    debugger
    switch (e.currentTarget.dataset.expended) {
        case "on":
            ref_aside_menu.classList.remove("expended");
            e.currentTarget.dataset.expended = "off";
            break;
        case "off":
            ref_aside_menu.classList.add("expended");
            e.currentTarget.dataset.expended = "on";
            break;
    }
}

ref_menu = document.getElementById("menu").addEventListener("click", onClick_menu);

function onClick_menu(e) {
    const target = e.target.closest(".menu-item");
    if (!target) {
        return;
    }
    ref_menu_items = document.querySelectorAll(".selected-item");
    for (item of ref_menu_items) {
        item.classList.remove("selected-item");
    }
    target.classList.add("selected-item");
}


