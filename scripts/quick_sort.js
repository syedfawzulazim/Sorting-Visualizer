function Quick(){
    c_delay=0;

    Quick_sort(0, arraySize-1);
    //display();
}


function Quick_partition(l, h){
    var pivot = divSize[l];
    var x = l;
    var y = h;

    div_update(divs[l],divSize[l],"yellow");


    while(x < y){
        while( x < h && divSize[x] <= pivot){
            div_update(divs[x],divSize[x],"red");
            div_update(divs[x],divSize[x],"DarkOrange");
            if(x === l){
                div_update(divs[x],divSize[x],"yellow");
            }
            x++;
            div_update(divs[x],divSize[x],"red");
        }
        while(divSize[y] > pivot){
            div_update(divs[y],divSize[y],"red");
            div_update(divs[y],divSize[y],"DarkOrange");
            y--;
            div_update(divs[y],divSize[y],"red");
        }
        if( x < y ){
            div_update(divs[x],divSize[x],"red");
            div_update(divs[y],divSize[y],"red");
           var temp = divSize[x];
           divSize[x] = divSize[y];
           divSize[y] = temp;

           div_update(divs[y],divSize[y],"CornflowerBlue");
           div_update(divs[x],divSize[x],"CornflowerBlue");
        }
    }

    var temp = divSize[l];
    divSize[l] = divSize[y];
    divSize[y] = temp;

    div_update(divs[l],divSize[l],"CornflowerBlue");
    div_update(divs[y],divSize[y],"CornflowerBlue");
    div_update(divs[x],divSize[x],"CornflowerBlue");

    return y;

}

function Quick_sort(low, high){
    if(low < high){
        var j = Quick_partition(low, high);
        // /div_update(divs[j],divSize[j],"CornflowerBlue");
        Quick_sort(low, j-1);
        Quick_sort(j+1, high);
    }

}

function display(){
    for(var i=0; i<arraySize-1; i++){
        console.log(divSize[i]);
    }
}
