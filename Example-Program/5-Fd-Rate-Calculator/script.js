//  FD Rate Calculator Months :
//  >3  Months = 6 %
//  3-6 Months = 6.5 %
//  7-9 Months = 7.5 %
//  10  Months = 10 %


function show() {
    let months = Number(document.querySelector(".form-control").value)

    let rate = 0

    if (months <= 3) {
        rate = 6
    } 

    else if (months >=3 && months <=6) {
        rate = 6.5
    }

    else if (months >=7 && months <=9) {
        rate = 7.5
    }

    else (months >10) 
    rate = 10 

    document.getElementById("output").value = `${rate} %`
}