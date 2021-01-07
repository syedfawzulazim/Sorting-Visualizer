function Merge(){

    c_delay = 0;

    Merge_partition(0, arraySize-1);

    
}

function Merge_sort(l, m, h){
    var i=l;
    var j = m+1;
    var k=l;

    var Arr=[];

    while(i <= m && j <= h){
        if( divSize[i] < divSize[j]){
            div_update( divs[i], divSize[i], "red");
            Arr[k++] = divSize[i++];
            
        }
        else{
            Arr[k++] = divSize[j++];
            div_update( divs[k], divSize[k], "red");
        }
    }

    while( i <= m ){
        Arr[k++] = divSize[i++];
        div_update( divs[k], divSize[k], "aqua");
    }
    while( j <= h){
        Arr[k++] = divSize[j++];
        div_update( divs[k], divSize[k], "aqua");
    }

    for(var x = l; x <= h; x++){
        divSize[x] = Arr[x]
        div_update( divs[x], divSize[x], "CornflowerBlue");
    }

}


function Merge_partition(low, high){

    if(low < high){
        var mid = Math.floor((low + high) / 2);

        div_update( divs[mid], divSize[mid], "yellow");

        Merge_partition(low, mid);
        Merge_partition(mid+1, high);

        Merge_sort(low, mid, high);

    }

}