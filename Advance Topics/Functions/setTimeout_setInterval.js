function printNumber(start,end)
{
    for (let i = start; i < end; i++) {
    
        console.log("i  - "+i);
        
    }
}


//syntax
//setTimeout(func | code , delayTime , arg1,arg2,...);
//setTimeInterval(func | code , delayTime , arg1,arg2,...);

setInterval(printNumber,5000, 10, 20); // it will call the function repeatdly after 5 seconds 
setTimeout(printNumber,5000,0,10 ); // it will call the function once after 5 seconds


// to stop setInterval
let c = 0;
let intVal = setInterval(()=>{
	if (c>10) {
		clearInterval(intVal);
	}
	console.log(c);
	c++;
},1000)