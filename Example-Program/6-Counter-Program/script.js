//  Counter Program :

let decbtn = document.getElementById("decreaseBtn")

let resbtn = document.getElementById("resetBtn")

let incbtn = document.getElementById("increaseBtn")

let counts = document.getElementById("counter")

let count = 0

incbtn.onclick = function() {
    count++
    counts.textContent = count
}

resbtn.onclick = function() {
    count = 0
    counts.textContent = count
}

decbtn.onclick = function() {
    count--
    counts.textContent = count
}