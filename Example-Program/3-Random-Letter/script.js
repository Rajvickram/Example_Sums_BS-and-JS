function show() {
    let name = document.querySelector(".form-control").value

    let formula = Math.floor(Math.random() * name.length)

    let result = name[formula]

    document.getElementById("output").value = `${result} Words`
}