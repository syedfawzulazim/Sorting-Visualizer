function Insertion(){

    c_delay=0;

    for(var i = 1; i < arraySize; i++){

        div_update( divs[i], divSize[i], "DarkGrey");

        var j = i-1;
        var x = divSize[i];

        while( j > -1  && divSize[j] > x){

            div_update( divs[j], divSize[j], "red"); // color
            div_update( divs[j+1], divSize[j+1], "red"); // color

            divSize[j+1] = divSize[j];

            div_update( divs[j], divSize[j], "black"); // height
            div_update( divs[j+1], divSize[j+1], "CornflowerBlue"); //height

            j--;;

        }

        divSize[j+1] = x;

    

        div_update( divs[j+1], divSize[j+1], "CornflowerBlue"); // color
        div_update( divs[j], divSize[j], "CornflowerBlue"); // color

    }




}