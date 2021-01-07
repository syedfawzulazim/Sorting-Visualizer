function Heap() {

    c_delay=0;
    Heap_sort();

}


function Swap(i, j){
    div_update( divs[i], divSize[i], "red");
    div_update( divs[j], divSize[j], "red");

    var temp = divSize[i];
    divSize[i] = divSize[j];
    divSize[j] = temp;

    div_update( divs[i], divSize[i], "red");
    div_update( divs[j], divSize[j], "red");

    div_update( divs[i], divSize[i], "DarkOrange");
    div_update( divs[j], divSize[j], "DarkOrange");
}

function Max_heapify(n, i){
    var largest = i;
    var l = 2*i+1;
    var r = 2*i+2;
    
    if( l < n && divSize[l] > divSize[largest]){
        if(largest !=i){
            div_update( divs[largest], divSize[largest], "DarkOrange");
        }
        largest = l;

        div_update( divs[largest], divSize[largest], "red");
    }
    if( r < n && divSize[r] > divSize[largest]){
        if(largest !=i){
            div_update( divs[largest], divSize[largest], "DarkOrange");
        }
        largest = r;
        div_update( divs[largest], divSize[largest], "red");
    }
    if(largest != i){
        Swap(i, largest);
        Max_heapify(n, largest);
    }
}



function Heap_sort() {

    for(var i = Math.floor((arraySize/2)-1); i >= 0; i--){
        Max_heapify(arraySize, i);
    }

    for(var i = arraySize-1; i>0; i--){
        Swap(0,i);
        div_update( divs[i], divSize[i], "CornflowerBlue");
        div_update( divs[i], divSize[i], "yellow");

        Max_heapify(i,0)
        div_update( divs[i], divSize[i], "DarkOrange");
        div_update( divs[i], divSize[i], "CornflowerBlue");
        
    }
    div_update( divs[i], divSize[i], "CornflowerBlue");
}