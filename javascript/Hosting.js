// var a=20;
// console.log(a);
// output 20
 //console.log(a);
// Uncaught ReferenceError: a is not defined

// console.log(a)
// let a=20;
// Reference Error:Cannot access "a" before initialization
 
//----------------------------------Arrow function---------------------------------
 
//let add=()=>{
  //  console.log("heyy!! idher dekhoo");
    
//}
//add()
// Output 'heyy!! idher dekhoo'

//-------------------------------------Map----------------------------------------------
// let arr=[1,2,3,4,5]
// let newA=arr.map((a,b,c)=>{
//     //console.log(a);
//     return a
    
// })
// console.log(newA);
//0utput [1, 2, 3, 4, 5]
//-------------------------------------------Filter--------------------------------------------
let arr=[1,2,3,4,5,6,7,8,8]
let filteraddvalue=arr.filter((a,b,c)=>{
    return a>4
}
) 
console.log(filteraddvalue)
//[5, 6, 7, 8, 8]
