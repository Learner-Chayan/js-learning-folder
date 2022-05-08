/**
 * 1 	Date()

Returns today's date and time
2 	getDate()

Returns the day of the month for the specified date according to the local time
3 	getDay()

Returns the day of the week for the specified date according to the local time
4 	getFullYear()

Returns the year of the specified date according to the local time
5 	getHours()

Returns the hour in the specified date according to the local time
6 	getMilliseconds()

Returns the milliseconds in the specified date according to the local time
7 	getMinutes()

Returns the minutes in the specified date according to the local time
8 	getMonth()

Returns the month in the specified date according to the local time
9 	getSeconds()

Returns the seconds in the specified date according to the local time
10 	getTime()

Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC
11 	getTimezoneOffset()

Returns the time-zone offset in minutes for the current locale
12 	getUTCDate()

Returns the day (date) of the month in the specified date according to the universal time
13 	getUTCDay()

Returns the day of the week in the specified date according to the universal time
14 	getUTCFullYear()

Returns the year in the specified date according to the universal time
15 	getutcHours()

Returns the hours in the specified date according to the universal time
16 	getUTCMilliseconds()

Returns the milliseconds in the specified date according to the universal time
17 	getUTCMinutes()

Returns the minutes in the specified date according to the universal time
18 	getUTCMonth()

Returns the month in the specified date according to the universal time
19 	getUTCSeconds()

Returns the seconds in the specified date according to the universal time
20 	setDate()

Sets the day of the month for a specified date according to the local time
21 	setFullYear()

Sets the full year for a specified date according to the local time
22 	setHours()

Sets the hours for a specified date according to the local time
23 	setMilliseconds()

Sets the milliseconds for a specified date according to the local time
24 	setMinutes()

Sets the minutes for a specified date according to the local time
25 	setMonth()

Sets the month for a specified date according to the local time
26 	setSeconds()

Sets the seconds for a specified date according to the local time
27 	setTime()

Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC
28 	setUTCDate()

Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC
29 	setUTCFullYear()

Sets the full year for a specified date according to the universal time
30 	setUTCHours()

Sets the hour for a specified date according to the universal time
31 	setUTCMilliseconds()

Sets the milliseconds for a specified date according to the universal time
32 	setUTCMinutes()

Sets the minutes for a specified date according to the universal time
33 	setUTCMonth()

Sets the month for a specified date according to the universal time
34 	setUTCSeconds()

Sets the seconds for a specified date according to the universal time
35 	todatestring()

Returns the "date" portion of the Date as a human-readable string
36 	toLocaleDateString()

Returns the "date" portion of the Date as a string, using the current locale's conventions
37 	toLocaleString()

Converts a date to a string, using the current locale's conventions
38 	toLocaleTimeString()

Returns the "time" portion of the Date as a string, using the current locale's conventions
39 	toString()

Returns a string representing the specified Date object
40 	toTimeString()

Returns the "time" portion of the Date as a human-readable string
41 	toUTCString()

Converts a date to a string, using the universal time convention
42 	valueOf()

Returns the primitive value of a Date object
 */



 //Date() 
    var dt = Date(); 
    console.log(dt); //output :  Wed Dec 23 2020 08:49:45 GMT+0600 (Bangladesh Standard Time)


//Date.getDate() 
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log(dt.getDate());  //output : 25
    var dt2 = new Date(); 
    console.log(dt2.getDate());  //output : current date and today is : 23


//Date.getDay() 
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log( dt.getDay()); //output weekday : 1
    var dt = new Date(); 
    console.log( dt.getDay());  // output : present week day : today is : 3


//Date.getFullYear()  
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log( dt.getFullYear());  //output : 1995
    var dt = new Date(); 
    console.log( dt.getFullYear()); //output : present full year : 2020 


//Date.getHours()   
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log( dt.getHours());   //output : 23
    var dt = new Date(); 
    console.log( dt.getHours());   //output : present hour : 8


//Date.getMilliseconds ()   
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log(dt.getMilliseconds());   //output : 0
    var dt = new Date(); 
    console.log( dt.getMilliseconds());   //output : present miliseconds : 933


//Date.getMinutes ()  
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log( dt.getMinutes());  //output: 15
    var dt = new Date(); 
    console.log( dt.getMinutes());  //output : present minute : 01


//Date.getMonth ()   
    var dt = new Date("December 25, 1995 23:15:00");  
    console.log( dt.getMonth()+1);  //output : 12
    var dt = new Date();  
    console.log( dt.getMonth()+1);  //output : present month : 12


//Date.getSeconds ()   
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log( dt.getSeconds());  //output : 0
    var dt = new Date(); 
    console.log( dt.getSeconds());  //output: present time seconds is : 40


//Date.getTime ()  
    var dt = new Date(); 
    console.log( dt.getTime());  //output : present time in milliseconds : 1608696736144
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log( dt.getTime());  //output : 819913500000   


 //Date.getTimezoneOffset()      
    var dt = new Date("December 25, 1995 23:15:00"); 
    console.log(dt.getTimezoneOffset()); //output: -330
    var dt = new Date(); 
    console.log(dt.getTimezoneOffset()); //output: -330

    /**
     * Javascript date getTimezoneOffset() method returns the time-zone offset in minutes for the current locale. 
     * The time-zone offset is the minutes in difference,
     *  the Greenwich Mean Time (GMT) is relative to your local time.
    For example, if your time zone is GMT+10, -600 will be returned. 
    Daylight savings time prevents this value from being a constant.
     */


 //Date.getUTCDate ()  
    var dt = new Date( "December 25, 1995 23:15:20" ); 
    console.log(dt.getUTCDate());  //output : 25
    var dt = new Date(); 
    console.log(dt.getUTCDate());  //output : 23
    /**JavaScript date getUTCDate() method returns the day of the month in the specified date according to universal time. 
     * The value returned by getUTCDate is an integer between 1 and 31. */

/*  Same as : UTC : 
    getUTCDay()

    Returns the day of the week in the specified date according to the universal time
    14 	getUTCFullYear()
    
    Returns the year in the specified date according to the universal time
    15 	getutcHours()
    
    Returns the hours in the specified date according to the universal time
    16 	getUTCMilliseconds()
    
    Returns the milliseconds in the specified date according to the universal time
    17 	getUTCMinutes()
    
    Returns the minutes in the specified date according to the universal time
    18 	getUTCMonth()
    
    Returns the month in the specified date according to the universal time
    19 	getUTCSeconds()
    
    Returns the seconds in the specified date according to the universal time
*/



//Date.setDate( dayValue )      
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setDate( 24 ); 
    console.log( dt )   //output : 2008-08-24T17:30:00.000Z

    var dt = new Date(); 
    dt.setDate( 24 ); 
    console.log( dt )   //output : present all but date 24  :2020-12-24T04:24:09.506Z00Z


//Date.setFullYear(yearValue[, monthValue[, dayValue]])       
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setFullYear( 2000); 
    console.log( dt ) //output : 2000-08-28T17:30:00.000Z
    dt.setFullYear( 2000, 1);
    console.log(dt); //output :  2000-02-28T17:30:00.000Z
    dt.setFullYear( 2000, 1, 10);
    console.log(dt);  //output : 2000-02-10T17:30:00.000Z

    //another trick
    console.log('same date printing with string concat'+dt); //output : Thu Feb 10 2000 23:30:00 GMT+0600 (Bangladesh Standard Time)


//Date.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setHours(2); 
    console.log(dt); //output(without string console) : 2008-08-27T20:30:00.000Z
    console.log("output : "+dt); //output(with string console) : output : Thu Aug 28 2008 02:30:00 GMT+0600 (Bangladesh Standard Time)0Z
    dt.setHours(2,10);
    console.log(dt); //output : 2008-08-27T20:10:00.000Z
    console.log(""+dt); //output : Thu Aug 28 2008 02:10:00 GMT+0600 (Bangladesh Standard Time)



//Date.setMilliseconds(millisecondsValue)       
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setMilliseconds( 1010 ); 
    console.log( dt ); //output : 2008-08-28T17:30:01.010Z
    console.log( ""+dt ); //output(with string) : Thu Aug 28 2008 23:30:01 GMT+0600 (Bangladesh Standard Time)



//Date.setMinutes(minutesValue[, secondsValue[, msValue]])       
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setMinutes( 45 ); 
    console.log( dt ); //output : 2008-08-28T17:45:00.000Z
    console.log(""+ dt ); //output(with string) : Thu Aug 28 2008 23:45:00 GMT+0600 (Bangladesh Standard Time)



//Date.setMonth(monthValue[, dayValue])       
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setMonth( 2 ); 
    console.log( dt ); //output(month+1) : 2008-03-28T17:30:00.000Z   
    console.log( ""+dt ); //output(with string) : Fri Mar 28 2008 23:30:00 GMT+0600 (Bangladesh Standard Time)
    dt.setMonth(2,1);
    console.log(dt); //output : 2008-03-01T17:30:00.000Z



//Date.setSeconds(secondsValue[, msValue])        
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setSeconds( 80 ); 
    console.log( dt );    //output  : 2008-08-28T17:31:20.000Z



//Date.setTime(timeValue)        
    var dt = new Date( "Aug 28, 2008 23:30:00" ); 
    dt.setTime( 5000000 ); 
    console.log( dt );  //output :  1970-01-01T01:23:20.000Z 
    console.log(""+ dt );  //output :  Thu Jan 01 1970 07:23:20 GMT+0600 (Bangladesh Standard Time)


/** // learn these if needed
 * setUTCDate()
Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC
29 	setUTCFullYear()
Sets the full year for a specified date according to the universal time
30 	setUTCHours()
Sets the hour for a specified date according to the universal time
31 	setUTCMilliseconds()
Sets the milliseconds for a specified date according to the universal time
32 	setUTCMinutes()
Sets the minutes for a specified date according to the universal time
33 	setUTCMonth()
Sets the month for a specified date according to the universal time
34 	setUTCSeconds()
Sets the seconds for a specified date according to the universal time
 */



//Date.toDateString()       
    var dt = new Date(1993, 6, 28, 14, 39, 7); 
    console.log( "Formated Date : " + dt.toDateString() ) //output: Formated Date : Wed Jul 28 1993
    console.log(dt.toDateString()); //output : Wed Jul 28 1993
    var dt = new Date();
    console.log(dt.toDateString()); // output : present date output : Wed Dec 23 2020



//Date.toLocaleString()       
/**Javascript date toLocaleDateString() method converts a date to a string,
 *  returning the "date" portion using the operating system's locale's conventions. */
    var dt = new Date(1993, 6, 28, 14, 39, 7); 
    console.log( "Formated Date : " + dt.toLocaleDateString())  //output: Formated Date : 7/28/1993
    var dt = new Date(); 
    console.log( "Formated Date pc : " + dt.toLocaleDateString())  //output(depend on device time): Formated Date pc : 12/23/2020


//Date.toLocaleString ()
    var dt = new Date(1993, 6, 28, 14, 39, 7); 
    console.log( "Formated Date : " + dt.toLocaleString());   //output : Formated Date : 7/28/1993, 2:39:07 PM
    var dt = new Date();
    console.log('operating system time :'+dt); //output : operating system time :Wed Dec 23 2020 11:13:17 GMT+0600 (Bangladesh Standard Time)



//Date.toLocaleTimeString () 
    var dt = new Date(1993, 6, 28, 14, 39, 7); 
    console.log( "Formated Date : " + dt.toLocaleTimeString()); //output : Formated Date : 2:39:07 PM
    var dt = new Date(); 
    console.log( "Formated Date : " + dt.toLocaleTimeString()); //output(depend on op system) : Formated Date : 11:17:32 AM



//Date.toString () 
    var dateobject = new Date(1993, 6, 28, 14, 39, 7); 
    var stringobj = dateobject.toString(); 
    console.log( "String Object : " + stringobj );//output : String Object : Wed Jul 28 1993 14:39:07 GMT+0600 (Bangladesh Standard Time)
    console.log(stringobj); //output: Wed Jul 28 1993 14:39:07 GMT+0600 (Bangladesh Standard Time)
    var dateObj = new Date();
    var strObj  = dateObj.toString();
    console.log(strObj); //output :Wed Dec 23 2020 11:24:55 GMT+0600 (Bangladesh Standard Time)



//Date.toTimeString () 
    var dateobject = new Date(1993, 6, 28, 14, 39, 7); 
    console.log( dateobject.toTimeString());  //output : 14:39:07 GMT+0600 (Bangladesh Standard Time)
    var presentDateObj = new Date();
    console.log(presentDateObj.toTimeString()); //output present date: 11:28:05 GMT+0600 (Bangladesh Standard Time)


//Date.valueOf()
    var dateobject = new Date(1993, 6, 28, 14, 39, 7); 
    console.log( dateobject.valueOf()); //output: 743848747000
    var date = new Date();
    console.log(date.valueOf()); //output : present : 1608701413254