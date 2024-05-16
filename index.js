const logDiv =document.getElementById("log");
const stateDiv =document.getElementById("state");
const startBtn =document.getElementById("start-btn");
const stopBtn =document.getElementById("stop-btn");


startBtn.addEventListener("click",()=>{

    document.addEventListener("keydown",handledown)
    document.addEventListener("keyup",handleup)

})


stopBtn.addEventListener("click",()=>{

    document.addEventListener("keydown",handledown)
    document.addEventListener("keyup",handleup)
    logDiv.textContent="";
    stateDiv.textContent="";

})

function handledown(e){

    logDiv.textContent=`key ${e.key} pressed down`
    stateDiv.textContent="key is down" 
}

function handleup(e){

    logDiv.textContent=`key ${e.key} pressed up`
    stateDiv.textContent=" key is up" 
}