import React from "react"

const ListRendering1 = () => {
    let name="vamsi"
    let age=28
    let loc="hyd"
    let isMarried=false 
    let skills=["pf","ds","da","genai","agenticai","dev","mern","gcp"]
    let users = [
  { id: 1, name: "Alice", role: "Admin", active: true },
  { id: 2, name: "Bob", role: "User", active: false }
];
  return (
    <div>
        <h2>ListRendering1</h2> 
        <p>name :-- {name}</p>
        <p>age :-- {age}</p>
        <p>loc :-- {loc}</p>
        <p>isMarried :-- {isMarried}</p>
        <p>skills :-- {skills.map((elem,index)=>{return <li>{elem}</li>})}</p>
        {/* {users.map(()=>{
            return <React.Fragment></React.Fragment>
        })} */}
        {users.map((elem,index)=>{
            return <>
            <p>{elem.id}</p>
            <h2>{elem.name}</h2>
            <p>{elem.role}</p>
            </>
        })}
    </div>
  )
}

export default ListRendering1


// react fragments 

// <React.Fragment></React.Fragment>
// <></>