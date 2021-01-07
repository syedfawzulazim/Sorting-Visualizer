// Color change of Button

function btnfunction(){

    var arrayGenerator = document.getElementById('array_generator');
}

    // array size, speed and generator by dom

    var inputSize = document.getElementById('array_size');
    var arraySize = inputSize.value;

    var inputSpeed = document.getElementById('array_speed');
    var arraySpeed = inputSpeed.value;

    var arrayGenerator = document.getElementById('array_generator');

    var algoBtns = document.querySelectorAll('.algos button');

    // variables
    var divSize = [];
    var divs =[];
    var marginSize;
    var cont = document.getElementById("array_conatainer");
    //cont.style = "flex-direction:row";

    // array generation and updation
    arrayGenerator.addEventListener('click', generateArray);
    inputSize.addEventListener('input', updateArraySize);
    inputSpeed.addEventListener('input', updateArraySpeed);

    // show array size and speed
    var SizeOfArray = document.getElementById('showSize');
    var SpeedOfArray = document.getElementById('showSpeed');
  
    //console.log(Math.floor(Math.random() * 0.5 * (inputSize.max - inputSize.min) ) + 10)
   


    // Generate Array
    function generateArray(){

        cont.innerHTML="";
        for(var i = 0; i < arraySize; i++){

            divSize[i] = Math.floor(Math.random() * 1.1 * (inputSize.max - inputSize.min) +12 );
            divs[i] = document.createElement("div");
            cont.appendChild(divs[i]);
            marginSize = 0.1;
            divs[i].setAttribute("class", "array");
            divs[i].innerHTML = '<p class="small ">'+divSize[i]+'</p>';
            divs[i].style = "background-color:DarkOrange; font-size:"+ 900/arraySize +"px; color:white; width: " + (100/arraySize-(2*marginSize)) + "%; height:" + (divSize[i]) + "%";
            
        }

    }

    // Update array size and animantion Speed
    function updateArraySize(){
        arraySize = inputSize.value;
        SizeOfArray.innerText = arraySize;
        generateArray();

    }
    function updateArraySpeed(){
        arraySpeed = inputSpeed.value;
        SpeedOfArray.innerText = arraySpeed;

    }
    window.onload=updateArraySize();
    window.onload=updateArraySpeed();
  

    // Running the algo
    for(var i=0; i<algoBtns.length; i++){
        algoBtns[i].addEventListener("click", runalgo);
    }

    function runalgo(){

        //console.log(this.innerText)
        //Bubble();

        switch(this.innerText)
        {
            case "BUBBLE":Bubble();
            break;
            case "SELECTION": Selections();
            break;
            case "INSERTION": Insertion();
            break;
            case "MERGE": Merge();
            break;
            case "QUICK": Quick();
            break;
            case "HEAP": Heap();
            break;
        }
    }