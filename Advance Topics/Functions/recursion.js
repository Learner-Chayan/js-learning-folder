 
 
 function printSeries(n)
{
    if(n == 1)
    {
        console.log(1);
        return;
    }else {
        
        printSeries(n-1);
        console.log(n);
    }
}



printSeries(10);