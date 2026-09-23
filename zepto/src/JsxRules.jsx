function JsxRules(){
    let userName=prompt("enter yr name")
    let age=parseInt(prompt("enter yr age"))
    return (
       <div className="jsx_rules" style={{backgroundColor:"darkmagenta",border:"2px solid black",borderRadius:"5px",padding:"5px"}}>
        <h2>hello there</h2>
       <p>im {userName}</p>
       <span>im {age}</span>
       </div>
       
    )
}
export default JsxRules