const posunDoprava = (evt) => {
    evt.target.classList.add("obrazek--posunut")
}

document.querySelector(".obrazek").addEventListener("keydown", posunDoprava)