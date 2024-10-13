import React, {useState} from 'react'
const clock =()=>{
    let[time,SetTime]=useState()
    setInterval(() =>{
    let currTime = newDate(). tolocateTimeString()
    SetTime(currTime)
})
return(
    <div>
        <h1>{time}</h1>
    </div>
)
}
export default clock