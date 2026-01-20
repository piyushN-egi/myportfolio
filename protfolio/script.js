const roles = ["IT Student", "Project Developer", "Tech Explorer"];
let i = 0, j = 0;
const el = document.getElementById("typing");

function type() {
    if (j < roles[i].length) {
        el.textContent += roles[i][j++];
        setTimeout(type, 120);
    } else setTimeout(erase, 1000);
}

function erase() {
    if (j > 0) {
        el.textContent = roles[i].substring(0, --j);
        setTimeout(erase, 80);
    } else {
        i = (i + 1) % roles.length;
        setTimeout(type, 300);
    }
}

type();

function openPopup(src) {
    popup.style.display = "flex";
    popupImg.src = src;
}

function closePopup() {
    popup.style.display = "none";
}
