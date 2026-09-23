// // import Login from "./Login"
// // import Dashboard from "./Dashboard"
// // function App2(){
// //     let loginStatus=parseInt(prompt("enter loginsttaus 1 or 0"))
// //     return (
// //         <div>
// //             <h2>app2</h2>
// //             <p>login status : -- {loginStatus ? "active" :"in-active"}</p>
// //             {loginStatus ? <Dashboard /> : <Login />} 

// //         </div>
// //     )
// // }
// // export default App2






// // logical and && 


// // import Login from "./Login"
// // import Dashboard from "./Dashboard"
// // function App2(){
// //     let loginStatus=parseInt(prompt("enter loginsttaus 1 or 0"))
// //     return (
// //         <div>
// //             <h2>app2</h2>
// //             {loginStatus && <Dashboard/>}

// //         </div>
// //     )
// // }
// // export default App2


// // import React from 'react'

// const App2 = () => {
//     let op=parseInt(prompt("enter 1.classes 2.attendance 3.interviewkit"))
//     if (op ==1 ){
//         return <Classes />
//     }else if (op==2){
//         return <Attendence />
//     }
//     else if (op ==3){
//         return <InterviewKIT />
//     }else{
//         return <FileNotFound />
//     }
// //  function handleClasses(){
// //     return <Classes />
// //  }
// //  function handleAttedance(){
// //     return <Attendence />
// //  }

// //  function handleInterviewKIT(){
// //     return <InterviewKIT />
// //  }
//   return (
//     <div>
//       <h2>app2 comp</h2>
//       <div >
//         {/* <button onClick={handleClasses}>Classes</button><br/>
//       <button onClick={handleAttedance}>Attendance</button><br/>
//       <button onClick={handleInterviewKIT}>InterviwKit</button><br/> */}
//       </div>
//     </div>
//   )
// }

// export default App2


const Classes = () => {
  return (
    <div>
      <h2>Classes</h2>
    </div>
  )
}


// const FileNotFound=()=>{
//     return (
//         <div>
//             <h2>no matched comps to render as per yr request</h2>
//         </div>
//     )
// }


const Attendence = () => {
  return (
    <div>
      <h2>Attendence</h2>
    </div>
  )
}

export {Attendence}




const InterviewKIT = () => {
  return (
    <div>
      <h2>InterviewKIT</h2>
    </div>
  )
}

export {InterviewKIT}


// // function submitHanlder(){
// //     let res=data.map()
// //     console.log(res)
// //     return res
// // }






const App2 = () => {
    const handle=(choosedPt)=>{
        if (choosedPt == "Classes"){
            return <Classes />
        }else if(choosedPt == "Attendance"){
            return <Attendence />
        }
        else if(choosedPt == "InterviewKit"){
            return <InterviewKIT />
        }

    }
    return (
    <div>
      <h2>app2 comp</h2>
      <div >
        <button onClick={()=>handle("Classes")}>Classes</button><br/>
      <button onClick={()=>handle("Attendance")}>Attendance</button><br/>
      <button onClick={()=>handle("InterviewKit")}>InterviwKit</button><br/>
      </div>
    </div>
  )
}

export default App2
