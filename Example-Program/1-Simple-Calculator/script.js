function Btn_1() {
    let a,b,c,d,tot,avg

    a = parseInt(document.querySelector(".form-control").value)

    b = parseInt(document.querySelector(".form-control").value)

    c = parseInt(document.querySelector(".form-control").value)

    d = parseInt(document.querySelector(".form-control").value)

    tot = a + b + c + d

    avg = tot * 12 / 100 - 3

    document.getElementById("result_1").value = `${avg.toFixed(2)} values`
}