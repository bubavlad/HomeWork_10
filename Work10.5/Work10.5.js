
let p = document.getElementById('text');
let button = document.getElementById('button');

button.onclick = function (e) {
    if (p.style.display === 'none') {
        p.style.display = 'block'
    } else {
        p.style.display = 'none'
    }
}

