console.log('This file for testing');



var date = new Date();
console.log(date.getTime());


//after 10 days ...
let tenDays = 10 * 24 * 60 * 60 * 1000; // 10 days in miliseconds 
console.log('Ten days miliseconds  = '+tenDays);  
console.log('present  miliseconds  = '+date.getTime());  
console.log('......................................');
console.log(date.getTime()+tenDays);


expaireDate = date.getTime() + tenDays;
console.log("Expaire Date in seconds = "+ expaireDate);