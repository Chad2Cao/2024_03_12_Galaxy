/**
 *
 * by chad
 */

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


window.onload=function (){
    let mainEle=document.querySelector('main');
    let startNumb=100;
    for (let i =0;i <startNumb; i++){
        let sildeEle=document.createElement('div');
        sildeEle.classList.add('slideWay');
        let star=document.createElement('div');
        let size=Math.random()*60+10;
        star.style.width=`${size}px`;
        star.style.height=`${size}px`;
        star.style.opacity = `${Math.random() * 0.2 + 0.1}`;
        star.style.backgroundColor = getRandomColor();
        console.log(getRandomColor());
        star.classList.add('star');
        sildeEle.appendChild(star);
        // sildeEle.style.width=`${Math.random()*400}px`;
        mainEle.appendChild(sildeEle);

        let r=Math.random()*1000+20;
        sildeEle.style.width=`${r}px`;
        sildeEle.style.animationDelay=`-${Math.random()*6000}s`;
        sildeEle.style.animationDuration=Math.sqrt(Math.pow(r,3))/20+'s';

    }
}