const paragraph =document.querySelector(".quotes");
const advBtn = document.querySelector(".btn");
const num = document.querySelector(".num");


function getAdv(){
    console.log("in");
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    
    }).then(adviceData => {
       const advice= adviceData.slip;
       paragraph.innerHTML = advice.advice;
       num.innerHTML =  advice.id;
       console.log(advice);
    }).catch(error =>{
        console.log(error);
    });
    
}

advBtn.addEventListener('click', () =>{
    console.log("Clikcled")
    getAdv();
});
window.onload =() =>{
    getAdv();
}


