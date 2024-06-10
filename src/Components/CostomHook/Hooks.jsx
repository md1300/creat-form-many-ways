import UseInputStateHooks from "../../Hooks/InputStateHooks";

const Hooks = () => {
    // const [name,handleNameChang]=UseInputStateHooks('khan')
    const emailState=UseInputStateHooks('tawhidkhan@gmail.com')

    const handleSubmitButton=e=>{
       
        console.log('form data', emailState.value)
        e.preventDefault()


    }
    return (
        <div>
            <h1>useing costom hooks in form</h1>
            <form onSubmit={handleSubmitButton}>
                {/* <input value={name} onChange={handleNameChang} type="text" name="text" placeholder="give your name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" placeholder=" give your mail " />
                <br />
                <input type="password" name="password" id="" placeholder="enter password " />
                <br />
                <input type="submit"   value="Submit" />
            </form>
        </div>
    );
};

export default Hooks;