document.querySelector('.yes-button').addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=6285696086038&text=Halo%2C%20aku%20menyukai%20kamu%20.';
});

document.querySelector('.no-button').addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=6285696086038&text=Maaf%2C%20aku%20tidak menyukai%20mu.';
});
