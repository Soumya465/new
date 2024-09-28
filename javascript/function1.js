// -----------------------find-------------------------------
// let arr=[1,2,3,4,5,8,8]
// let kyaayega=arr.find((a,b,c)=>{


// return a==8
// })
// console.log(kyaayega);
// output 8

//--------------------------------for each---------------------------
// let arr=[1,2,3,4,6,7,9,9]
// arr.forEach((a,b,c)=>{
//    // console.log(a);
//     //console.log(b);
//     console.log(c);
// }
// )
//OUTPUT console.log(a) actual value print
//output console.log(b) index value print
//output console.log(C) ALL values are returns same as an arr value

//----------------------------practice----------------------
 let data=[
    {
        id:1,
        name:'rahul'

    },
    {
        id:2,
        name:'riya'
    }
 ]
 data.map((a)=>{
    console.log(a.name)
 })

