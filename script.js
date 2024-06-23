document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('downloadButton').addEventListener('click', function() {
    window.location.href = 'path_to_your_game/PoisonPaddle.zip';
});
