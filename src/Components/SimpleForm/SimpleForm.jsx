

const SimpleForm = () => {
    const handleSubmitButton=e=>{
        e.preventDefault()
        console.log(e.target.text.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        console.log('connected your submit button')

      
    } 
    return (
        <div>
            <h1>Fill-up the form fast</h1>
            <form onSubmit={handleSubmitButton}>
                <input type="text" name="text" placeholder="give your name" />
                <br />
                <input type="email" name="email" id="" placeholder=" give your mail " />
                <br />
                <input type="password" name="password" id="" placeholder="enter password " />
                <br />
                <input type="submit"   value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;