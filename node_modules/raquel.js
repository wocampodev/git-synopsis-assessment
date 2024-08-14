document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
        button.classList.toggle('blue');
    });
});
