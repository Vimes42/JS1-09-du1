const posunDoprava = (evt) => {
    evt.target.classList.toggle("obrazek--posunut")
}

document.querySelector(".obrazek").addEventListener("keydown", posunDoprava)