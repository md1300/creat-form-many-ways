

const ReuseForm = ({formTitle,textSubmitButton,handleSubmitButton,children}) => {


    // const handleSubmitButton=e=>{
    //     e.preventDefault()
    // }

const handleLocalSubmitButton =e=>{
    // data.preventDefault()
    e.preventDefault()
    const data={
        name: e.target.text.value ,
        email: e.target.email.value ,
        password : e.target.password.value ,

    }
    handleSubmitButton(data)
}

    return (
        <div> 
             {children}
              <form onSubmit={handleLocalSubmitButton}>
                <input type="text" name="text" placeholder="give your name" />
                <br />
                <input type="email" name="email" id="" placeholder=" give your mail " />
                <br />
                <input type="password" name="password" id="" placeholder="enter password " />
                <br />
                <input type="submit"   value={textSubmitButton} />
            </form>
        </div>
    );
};

export default ReuseForm;