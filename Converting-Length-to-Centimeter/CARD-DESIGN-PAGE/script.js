//  First Card using Centimeter to Length :

function call() {
    let Centimeter = Number(document.getElementById("input-field-1").value)

    let formula_1 = Centimeter / 2.54

    document.getElementById("Passing-1").value = formula_1.toFixed(2)
}

//  Second Card using Celsius to Fahrenheit :

function get() {
    let Celsius = Number(document.getElementById("input-field-2").value)

    let formula_2 = (9/5 * Celsius) + 32

    document.getElementById("Passing-2").value = formula_2
}

//  Third Card using Random Letters : 

function show() {
    let name = document.getElementById("input-field-3").value

    let formula_3 = Math.floor(Math.random() * name.length)

    let result = name[formula_3]

    document.getElementById("Passing-3").value  = result
}