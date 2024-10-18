const person ={
  firstName: "Atul",
  lastName: "Meena",

  age : 56
};

//Destructing
let {firstName,lastName}=person;


document.getElementById("select")
.innerHTML= firstName +" "+lastName;