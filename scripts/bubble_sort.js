function Bubble()
{
    c_delay=0;

    for(var i=0;i<arraySize-1;i++)
    {
        for(var j=0;j<arraySize-i-1;j++)
        {
            div_update(divs[j],divSize[j],"yellow");//Color update

            if(divSize[j]>divSize[j+1])
            {
                div_update(divs[j],divSize[j], "red");//Color update
                div_update(divs[j+1],divSize[j+1], "red");//Color update

                var temp=divSize[j];
                divSize[j]=divSize[j+1];
                divSize[j+1]=temp;

                div_update(divs[j],divSize[j], "red");//Height update
                div_update(divs[j+1],divSize[j+1], "red");//Height update
            }
            div_update(divs[j],divSize[j], "DarkOrange");//Color update
        }
        div_update(divs[j],divSize[j], "CornflowerBlue");//Color update
    }
    div_update(divs[0],divSize[0], "CornflowerBlue");//Color update


}
