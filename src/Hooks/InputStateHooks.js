import { useState } from "react"

const UseInputStateHooks=(defaultValue='')=>{

const [value,setValue]=useState(defaultValue);

// const changeValue=(e)=>{
//      setValue(e.target.value);
// }

// return [value,changeValue]
const onChange=e=>{
    setValue(e.target.value)
}
return {
    value,
    onChange
}

}



export default UseInputStateHooks