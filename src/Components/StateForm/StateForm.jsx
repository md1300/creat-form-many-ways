import { useState } from "react";


const StateForm = () => {
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [error,setError]=useState(null)

    const handleStateSubmitButton=e=>{
        e.preventDefault()

        {
          if(password.length < 6){
            setError('please,enter six character')
          }
          else{
            setError('')
            console.log(name,email,password)
      
          }
        }
      
    //   console.log('conn3enctid')
    }

    const handleOnChangeName=e=>{
        setName(e.target.value)
    }

    const handleOnChangeEmail=e=>{
        setEmail(e.target.value)
    }

    const handleOnChangePassword=e=>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1>fill in then form with suitable words</h1>
             <form onSubmit={handleStateSubmitButton}>
                <input onChange={handleOnChangeName} type="text" name="text" placeholder="give your name" />
                <br />
                <input onChange={handleOnChangeEmail} type="email" name="email" id="" placeholder=" give your mail " />
                <br />
                <input onChange={handleOnChangePassword} type="password" name="password" id="" placeholder="enter password " required />
                <br />
                <input type="submit"   value="Submit" />
            </form>
            {
                <p>{error}</p>
            }
        </div>
    );
};

export default StateForm;