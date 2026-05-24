const inputs = document.querySelectorAll('.personal-data div input, .message-input');
const radioButtons = document.querySelectorAll('.radio-group input[type="radio"]');
const button = document.querySelector('button');

inputs.forEach(input => {
    input.addEventListener('input', event => {
        event.preventDefault();
        input.setCustomValidity('');

        if (input.validity.valid) {
            const errorMessage = input.nextElementSibling;
            errorMessage.style.display = 'none';
            input.style.borderColor = 'hsl(0, 0%, 60%)';
        } else {
            const errorMessage = input.nextElementSibling;
            errorMessage.style.display = 'block';
            input.style.borderColor = 'hsl(0, 100%, 74%)';
        }
    });
});

button.addEventListener('click', event => {
    let correct = true;
    event.preventDefault();
    const formElements = document.querySelectorAll('input, textarea, input[type="radio"], input[type="checkbox"]');

    formElements.forEach(element => {
        if (!element.validity.valid) {
            const errorMessage = document.querySelector(`#${element.id} ~ .error-message`);
            errorMessage.style.display = 'block';
            element.style.borderColor = 'hsl(0, 100%, 74%)';
            correct = false;
        }
    });

    if (!correct) return;

    formElements.forEach(element => {
        element.value = '';
        element.checked = false;
    });

    const alert = document.getElementById('alert');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    alert.style.display = 'block';

    if (!prefersReducedMotion) {
        alert.style.animation = 'alert-appear 0.5s ease-out';

        setTimeout(() => {
            alert.style.animation = 'alert-disappear 0.8s ease-out';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 790);
        }, 7000);
    } else {
        setTimeout(() => {
            alert.style.display = 'none';
        }, 7000);
    }
});
