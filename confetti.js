function startAgroConfetti() {
    const emojis = ["🌾","🌿","🍃","🌱","🚜"];
    
    for(let i=0; i<40; i++){
        let conf = document.createElement("div");
        conf.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        conf.style.position = "fixed";
        conf.style.left = Math.random()*100 + "vw";
        conf.style.top = "-10px";
        conf.style.fontSize = "24px";
        conf.style.animation = "fall 3s linear";
        document.body.appendChild(conf);

        setTimeout(()=> conf.remove(),3000);
    }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh); }
}`;
document.head.appendChild(style);
