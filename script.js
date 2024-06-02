const bg = document.getElementById('color_bg');
const btn = document.getElementsByClassName('btn')[0];
bg.style.width = "100vw";
bg.style.height ="100vh";
bg.style.display ="flex";
bg.style.justifyContent ="center";
bg.style.alignItems = "center";


const colors =['rgba(123, 123,123,0.5)','green', 'pink', 'yellow', '#dc143c','#44c5c7','#bec744','#7b44c7'];

btn.addEventListener('click', function(){
	const random1 = Math.floor(Math.random()*5);
	const random2= Math.floor(Math.random()*5);
	bg.style.background = `linear-gradient(${colors[random1]}, ${colors[random2]})`;
})
