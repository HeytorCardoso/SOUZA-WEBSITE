document.addEventListener("DOMContentLoaded", function() {
    const group = document.querySelector('.group');
        const clone = group.innerHTML;
        group.innerHTML += clone;
});