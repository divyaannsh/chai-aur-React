import { useState ,useCallback} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] =useState(false);
const [charAllowed, setcharAllowed] =useState(false)
const [Password, setPassword] =useState("")

// const passwordgenerator = () => {}
const passwordgenerator = useCallback(() =>{
   let pass = ""
   let str = 
   "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghiklmnopqrstuvwxyz"
   if(numberAllowed) str += "0123456789"
   if(charAllowed) str += "!@#$%^&*()"
      
   for (let i = 1; i <= array.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    
   }
   setPassword(pass)

},
, [length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray'> Test</div>
    </>
  );
}

export default App;
  