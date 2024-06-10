import { useEffect, useRef } from "react";


const RefForm = () => {
    const textRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()

    useEffect(()=>{
        textRef.current.focus()
     },[])

    const handleSubmitRefButton=e=>{
        e.preventDefault()
        console.log(textRef.current.value)
        console.log(emailRef.current.value)
         console.log(passwordRef.current.value) 

        
    }
     
    
    return (
        <div>
            <h1>useing ref in form</h1>
            <form onSubmit={handleSubmitRefButton}>
                <input ref={textRef} type="text" name="text" placeholder="give your name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" placeholder=" give your mail " />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" placeholder="enter password " />
                <br />
                <input type="submit"   value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;