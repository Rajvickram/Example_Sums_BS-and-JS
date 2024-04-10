let btn  = document.querySelector("button")

let rest = document.createElement('div')
rest.id = 'result'
document.getElementById('wrapper').appendChild(rest)    


btn.addEventListener('click', displayStats)

function displayStats() {
    let inp = document.getElementById("input-range")

    let city = inp.options[inp.selectedIndex].value

    let Population = 0, LiteracyRate = 0, Language = ''

    switch (city) {
        case 'Chidambaram' :
            Population = 895623
            LiteracyRate = 85.10
            Language = 'Tamil'
            break

        case 'Chennai' :
            Population = 986523
            LiteracyRate = 95.10
            Language = 'English'
            break

        case 'Bangalore' :
            Population = 789654123
            LiteracyRate = 96.10
            Language = 'Kannada'
            break

        case 'Mumbai' :
            Population = 785412369
            LiteracyRate = 97.2
            Language = 'Hindi'
            break

        case 'Delhi' :
            Population = 6523985
            LiteracyRate = 95.0
            Language = 'Marathi'
            break 
    }

    let text = `The Indian City ${city} have Population is ${Population} more of an Members next the Literacy Rate is ${LiteracyRate} and the Language the were spoken is ${Language}`

    document.getElementById("result").innerHTML = text
}