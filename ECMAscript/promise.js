/**
 * Example 
 * The example given below shows a function add_positivenos_async() which adds two numbers asynchronously.
 *  The promise is resolved if positive values are passed. The promise is rejected if negative values are passed.
 */

    function add_positivenos_async(n1, n2) {
        let p = new Promise(function (resolve, reject) {
        if (n1 >= 0 && n2 >= 0) {
            //do some complex time consuming work
            resolve(n1 + n2)
        }
        else
            reject('NOT_Postive_Number_Passed') 
        })
        return p;
    }

    add_positivenos_async(10, 20)
        .then(successHandler) // if promise resolved
        .catch(errorHandler);// if promise rejected

    add_positivenos_async(-10, -20)
        .then(successHandler) // if promise resolved
        .catch(errorHandler);// if promise rejected

    function errorHandler(err) {
        console.log('Handling error', err)
    }
    function successHandler(result) {
        console.log('Handling success', result)
    }

    console.log('end')



    //Promises Chaining
    /**
     * Promises chaining can be used when we have a sequence of asynchronous tasks to be done one after another.
     *  Promises are chained when a promise depends on the result of another promise.
     *  This is shown in the example below
     */

    function add_positivenos_async_chaining(n1, n2) {
        let p = new Promise(function (resolve, reject) {
           if (n1 >= 0 && n2 >= 0) {
              //do some complex time consuming work
              resolve(n1 + n2)
           }
           else
              reject('NOT_Postive_Number_Passed')
        })
        return p;
     }
  
     add_positivenos_async_chaining(10,20)
     .then(function(result){
        console.log("first result",result)
        return add_positivenos_async_chaining(result,result)
     }).then(function(result){
     console.log("second result",result)
        return add_positivenos_async_chaining(result,result)
     }).then(function(result){
        console.log("third result",result)
     })
  
     console.log('end')



//Promise.all(iterable);
/** 
 * This method can be useful for aggregating the results of multiple promises.
 */
function add_positivenos_async_all(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
          resolve(n1 + n2)
       }
       else
          reject('NOT_Postive_Number_Passed')
    })

    return p;
 }
 //Promise.all(iterable)

Promise.all([add_positivenos_async_all(10,20),add_positivenos_async_all(30,40),add_positivenos_async_all(50,60)])
 .then(function(resolveValue){
    console.log(resolveValue[0])
    console.log(resolveValue[1])
    console.log(resolveValue[2])
    console.log('all add operations done')
 })
 .catch(function(err){
    console.log('Error',err)
 })
 console.log('end')