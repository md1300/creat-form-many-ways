import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateForm from './Components/StateForm/StateForm'
import './App.css'
import RefForm from './Components/RefForm/RefForm'
import Hooks from './Components/CostomHook/Hooks'
import ReuseForm from './Components/ReuseForm/ReuseForm'

function App() {

  const handleSignUpButton=e=>{
    // e.preventDefault()
    console.log(e)
  }
 
  const handleUpdateButtn=e=>{
    // e.preventDefault()
    console.log(e)
  }

  return (
    <>
     
      <h1>Vite + React</h1>
      <SimpleForm></SimpleForm>
      <StateForm></StateForm>
      <RefForm></RefForm>
      <Hooks></Hooks>

      <ReuseForm formTitle={'Sign Up'}
      handleSubmitButton={handleSignUpButton}>
        <div>
          <h2>Sign Up</h2>
          <p>At first Sign up please</p>
        </div>
      </ReuseForm>
      <ReuseForm formTitle={'Update profile'}
      textSubmitButton={'Update'}
      handleSubmitButton={handleUpdateButtn}>
        <div>
          <h2>Update Profile</h2>
          <p>you should update your profile</p>
        </div>
      </ReuseForm>

      
      
    </>
  )
}

export default App
