canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car_width=120;
car_height=70;
car_image="https://postimg.cc/9rqYz9HM";
car_x=10;
car_y=10;
car2_width=120;
car2_height=70;
car2_image="https://postimg.cc/9rqYz9HM";
car2_x=10;
car2_y=10;
background_image="https://i.postimg.cc/KzWwHPcq/racing.gif";
function add(){
backround_imgtag=new Image();
backround_imgtag.onload=uploadbackground;
backround_imgtag.src=background_image;
car_imgtag=new Image();
car_imgtag.onload=car_image; 
car_imgtag.src=car_image;                                        
car2_imgtag=new Image();
car2_imgtag.onload=car2_image;
car2_imgtag.src=car2_image;
}
function uploadbackground(){
    ctx.drawImage(backround_imgtag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38') 
{
    car_up();  
    console.log("up arrow key");
    }
    if(keyPressed=='40') 
{
    car_down();  
    console.log("down arrow key");
    }
    if(keyPressed=='37') 
{
    car_left();  
    console.log("left arrow key");
    }
    if(keyPressed=='39') 
{
    car_right();  
    console.log("right arrow key");
    }  
    if(keyPressed=='87') 
{
    car2_up();  
    console.log("key w");
    }
    if(keyPressed=='89') 
{
    car2_down();  
    console.log(" key y");
    }
    if(keyPressed=='86') 
{
    car2_left();  
    console.log("key v");
    }
    if(keyPressed=='88') 
{
    car2_right();  
    console.log("key x");
    }
}

