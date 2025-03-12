import React, { useState , useEffect } from 'react';

function App() {
  
  return (
    <>
      <MyComponent />
    </>    
  )
}

function useDebouncing(value,time){
    const [dvalue , setDvalue] = useState('');
    useEffect(()=>{
      const id = setTimeout(()=>{
        setDvalue(value);
      },time)

      return ()=>{
        clearTimeout(id);
      }
    },[value]);

    return dvalue;
}


function MyComponent() {
  const [values,setValues] = useState('');

  const debouncedValue = useDebouncing(values,500)

  return <>
    {debouncedValue}
    <input 
    type="text" 
    onChange={e => setValues(e.target.value)}
    placeholder='add something here...'
    />
  </>
  
}


export default App
