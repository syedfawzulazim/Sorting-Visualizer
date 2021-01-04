function Selections(){
    
    c_delay = 0;

    var k;

    for(var i = 0; i < arraySize - 1; i++){

        div_update(divs[i],divSize[i],"red");

        for( var j = k = i; j < arraySize; j++){

            div_update(divs[j],divSize[j],"yellow");
         
            if( divSize[j] < divSize[k] ){

                if( k != i){
                    div_update(divs[k],divSize[k],"DarkOrange"); 
                }
                k = j;
                div_update(divs[k],divSize[k],"red");
            
            }
            else{
                if( j != i)
                div_update(divs[j],divSize[j],"DarkOrange"); 
                
                div_update(divs[i],divSize[i],"black");
            }

        }
       
        if( k != i)
        {            
        var temp = divSize[i];
        divSize[i] = divSize[k];
        divSize[k] = temp;

        div_update(divs[k],divSize[k],"red");
        div_update(divs[i],divSize[i],"red");
        div_update(divs[k],divSize[k],"DarkOrange");
        }
        
        div_update(divs[i],divSize[i],"green");
        
    }
    div_update(divs[i],divSize[i],"green");

}