function press() {
    let words = document.getElementById("input").value

    let formula = words.length

    document.querySelector("#result").value = `${formula} Lengths`
}