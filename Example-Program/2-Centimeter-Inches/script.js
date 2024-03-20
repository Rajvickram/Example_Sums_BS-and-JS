function cmToInch() {
    let centimeter = Number(document.querySelector(".form-control").value)

    let formula = centimeter / 2.54

    document.getElementById("result").value = `${formula.toFixed(2)} Inches`
}