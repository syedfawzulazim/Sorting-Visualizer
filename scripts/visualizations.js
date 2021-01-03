var speed = 5;

inputSpeed.addEventListener('input', animationSpeed);

function animationSpeed(){
    arraySpeed = inputSpeed.value;
    switch(parseInt(arraySpeed)){
        case 1: speed = 1;
        break;
        case 2: speed = 10;
        break;
        case 3: speed = 100;
        break;
        case 4: speed = 1000;
        break;
        case 5: speed = 10000;
        break;
    }

    delay_time = 10000 / (Math.floor(arraySize/10)*speed);
}

var delay_time = 10000/(Math.floor(arraySize/10)*speed);
var c_delay = 0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.innerHTML = '<p class="small" style=" ;">'+ height +'</p>';
        cont.style = "font-size:"+900/arraySize+"px; color:white; width: " + (100/arraySize-(2*marginSize)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}