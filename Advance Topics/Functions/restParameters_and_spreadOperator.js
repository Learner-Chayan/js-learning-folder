
//Example like this: Math.max(3,4,5,6,7,9);
//Rest parametters 
function add(...n)
{
    let result = 0;
    for(let i of n)
    {
        result = result + i;
    }

    return result;
}

console.log("summation from rest parameters for 4 + 5 ="+add(4,5));
console.log("summation from rest parameters for 7 + 5 + 5 ="+add(7,5,5));
console.log("summation from rest parameters for 4 + 2 + 2 + 7="+add(4,2,2,7));


///Example like this : Math
//Object.assign(arr3,arr1,arr2);
//Object.assign(destination,array1,array2...arrayn);

//Spread operators 
let arr1 = [2,3,4,5];
let arr2 = [5,6,7,8,9];

let arr3 = [...arr1,...arr2];

console.log("Ouput of spread operators");
console.log(arr3);