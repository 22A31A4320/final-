function loadPage(page) {
    fetch(page)
    .then(res => res.text())
    .then(data => {
        const content = document.getElementById("content-area");
        content.style.opacity = 0;
        setTimeout(()=>{
            content.innerHTML = data;
            content.style.opacity = 1;
        },300);
    });
}
