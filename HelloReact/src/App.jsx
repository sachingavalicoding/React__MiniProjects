import { useState } from 'react'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
const App = () => {
  const [darkmode, setDarkMode] = useState(true);

  const handleMode = () => {
    setDarkMode(!darkmode);
  }
  return (
    <main className={`w-full h-screen  grid place-items-center ${darkmode == false ? 'bg-gray-100' : 'bg-gray-950 text-gray-100'}  `}>
      <div className='grid container gap-10 mx-auto p-2 place-items-center '>

        <h1 className={`text-center font-bold text-slate-800  text-lg lg:text-3xl  ${darkmode == false ? 'text-slate-900' : 'text-slate-100'} `} > Toggle {darkmode== false ? 'Dark' : 'Light'} Mode </h1>

        {
          darkmode == false ?  <BsFillSunFill className='icon' onClick={handleMode}  />  : <BsFillMoonStarsFill className='icon' onClick={handleMode}  /> 
        }
  
 
   </div>
  </main>
  )
}

export default App