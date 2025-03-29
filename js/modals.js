document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        let modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

window.onclick = event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
