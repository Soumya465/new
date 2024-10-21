// let promise =new Promise((res,rej)=>{
//     res()
// })
// console.log(promise,'HELLO' )
//output fulfilled

// let promise =new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej()
//     },4000)
// })
// console.log(promise,'HELLO')

let promise = new Promise((res,rej)=>{
  let reason="barish"
     if(reason === "baarish"){

          rej()}
       else {
            res()
         }
 })
// console.log("promise")



 promise.then((a)=>{
    console.log(a);
 })
 .catch((err)=>{
    console.log(err);
 })

