let score1 = 0;
let score2 = 0;

let homeCurr = document.getElementById("home-current");
let guestCurr = document.getElementById("guest-current");
homeCurr.textContent = score1;
guestCurr.textContent = score2;

function addHome1() {
    score1 += 1;
    homeCurr.textContent = score1;
}

function addHome2() {
    score1 += 2;
    homeCurr.textContent = score1;
}

function addHome3() {
    score1 += 3;
    homeCurr.textContent = score1;
}

function addGuest1() {
    score2 += 1;
    guestCurr.textContent = score2;
}

function addGuest2() {
    score2 += 2;
    guestCurr.textContent = score2;
}

function addGuest3() {
    score2 += 3;
    guestCurr.textContent = score2;
}

function reset() {
    score1 = 0;
    score2 = 0;
    homeCurr.textContent = score1;
    guestCurr.textContent = score2;
}