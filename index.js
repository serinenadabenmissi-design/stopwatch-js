const counter=document.getElementById("counter");
let stattime=0;
let elapsedtime=0;
let timer=0;
let run=false;
function update(){
    elapsedtime=Date.now()-stattime;
    let hour=Math.floor(elapsedtime/(1000*60*60));
    let minute=Math.floor(elapsedtime/(1000*60)%60);
    let sec=Math.floor(elapsedtime/1000%60);
    hour=String(hour).padStart(2,0);
    minute=String(minute).padStart(2,0);
    sec=String(sec).padStart(2,0);
    counter.textContent=`${hour}:${minute}:${sec}`;


}
function start(){
    if(!run){
        stattime=Date.now()-elapsedtime;
        timer=setInterval(update,10);
        run=true;
    }
}
function reset(){
    clearInterval(timer);
    elapsedtime=0;
    counter.textContent="00:00:00";
    run=false;

}
function stop(){
    if(run){
        clearInterval(timer);
        elapsedtime=Date.now()-stattime;
        run=false;
    }
    

}