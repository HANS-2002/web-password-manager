function reveal(revealId) {
    var revealElement = document.getElementById(revealId);
    var eyeElement = document.getElementById('eye' + revealId);
    if (revealElement.type === 'password') {
        revealElement.type = 'text';
        eyeElement.className = 'fa-solid fa-eye-slash';
    }
    else {
        revealElement.type = 'password';
        eyeElement.className = 'fa-solid fa-eye';
    }

}