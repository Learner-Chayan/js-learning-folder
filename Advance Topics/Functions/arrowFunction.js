

// arrow Function

let hello = (params) => {
    document.getElementById('demo').innerHTML = params;
}

//windwo object calls the function
window.addEventListener("load",hello('Running from window'));

// button object calls the function
setInterval(()=> {
    document.getElementById("btn").addEventListener("click",hello("button clicked"));
},3000)
