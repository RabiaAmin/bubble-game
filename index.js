let score = 0;
let setTime = 6;
let hitVal = "";
let hitCount = 0;

function createBubble(){
    let clutter = "";
    for(i=1;i<=170;i++){
       clutter += `  <div class="bubble"> ${Math.floor(Math.random()*10)} </div>`
    }
    
    document.querySelector("#panel_bottom").innerHTML=clutter;
}

function runTimer(){
   let timer =  setInterval(()=>{
    if(setTime>0){
        setTime--;
        document.querySelector("#timer_value").textContent = setTime;
    }
    else{
        clearInterval(timer);
        document.querySelector("#panel_bottom").innerHTML = `<h1>Game Over</h1><h3>Total Right Hits: ${hitCount}</h3><h3>Total Score: ${score}</h3> <div id="btn">Play Again</div>`;
        document.querySelector("#btn").addEventListener("click",()=>{
             score = 0;
            setTime = 6;
           hitVal = "";
           hitCount = 0;
            createBubble();
            runTimer();
            hitBubble();
            bubbleBursting();
        });
    }
   
    },1000);
}

function hitBubble(){
    hitVal = Math.floor(Math.random()*10);
   document.querySelector("#hit_vlaue").textContent = hitVal;
}

function increaseScore(){
    score += 10;
    document.querySelector("#score_val").textContent = score;
}

function bubbleBursting(){

  document.querySelector("#panel_bottom").addEventListener("click",(dets)=>{
       let  clickVal = Number(dets.target.textContent);
        console.log(clickVal);
        if(clickVal === hitVal){
                hitCount++;
                increaseScore();
                createBubble();
                hitBubble();
            
         
         
          }
  })




  
}


createBubble();
runTimer();
hitBubble();
bubbleBursting();



//<h1>Game Over</h1><h3>Total Hits: 3</h3><h3>Total Score: 30</h3>