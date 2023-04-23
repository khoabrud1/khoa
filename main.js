let info_btn = document.getElementById('info-btn');
let contact_info = document.getElementById('contact-info');

info_btn.addEventListener('click',function() {
    if ( info_btn.innerText == 'HIDE INFO' ) {
        info_btn.innerText='SHOW INFO';
        contact_info.style.opacity = 0;
    } else {
        info_btn.innerText = 'HIDE INFO'
        contact_info.style.opacity = 1;
    }
});
