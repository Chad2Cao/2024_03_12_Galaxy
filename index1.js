/**
 *
 * by chad
 */

  
window.onload=function (){
    let mainEle = document.querySelector('body');
    let night = document.createElement('div');
    night.classList.add('night');
    let startNumb = 3;
    for (let i =0;i <startNumb; i++){
        let star=document.createElement('div');
        star.style.top=`${Math.random()*900}px`;
        star.style.left=`${Math.random()*800}px`;
        star.style.opacity = `${Math.random() * 0.3 + 0.3}`;
        
        star.classList.add('shooting-star');
        star.style.animationDelay=`-${Math.random()*5000}ms`;
        // sildeEle.style.width=`${Math.random()*400}px`;
        night.appendChild(star);
        let r = Math.random() * 1000 + 20;
    }
    mainEle.appendChild(night);
}