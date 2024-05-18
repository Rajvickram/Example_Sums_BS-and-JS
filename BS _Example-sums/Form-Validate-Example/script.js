function call() {
    window.addEventListener('load', function() {
        let forms = document.getElementById('for-vali');

        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validate');
            }, false)
        })
    })
}   