const screen=document.querySelector(".screen");
screen.innerHTML="";
const btn=document.querySelectorAll("td");
const arr1=[];

for (let i=2;i<16;i++){
    btn[i].addEventListener("click",function(){
        screen.innerHTML=screen.innerHTML+btn[i].innerHTML;
        arr1.push(btn[i].innerHTML);
                                       

    
    })

}
btn[1].addEventListener("click",function(){
let x="";
  for(let j=0;j<arr1.length;j++){
      x=x+arr1[j];

  }
  screen.innerHTML=eval(x);
})


btn[0].addEventListener("click",function(){
    screen.innerHTML="";
    while(arr1.length!=0){
        arr1.pop();
    }
})



