const body = document.querySelector("body");
const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.NoBtn');

yesBtn.addEventListener('click', (e)=>{
    const target = e.target
    // console.log(target)
    if(yesBtn){
       
        document.getElementById("container").style.display = "block";
        document.querySelector('.verify').style.display = "none";

        setInterval(createHeart,100);
    setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)
    }
})
noBtn.addEventListener('click', ()=>{
    if(noBtn){
        document.querySelector('.verify').style.display = "none";
        document.querySelector('.message').style.display = "block"
    }
})

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
