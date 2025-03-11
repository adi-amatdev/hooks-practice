import React, { useState , useEffect } from 'react';

function App() {
  const [bool,setBool] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{setBool(r => !r)},10000)
  },[]);
  return (
    <>
    {bool?(
      <MyComponent />
    ):(
      <div></div>
    )}
    </>
  )
}


function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    alert('component mounted')
    return () => {
      // Cleanup code (similar to componentWillUnmount)
      alert('component un-mounted')
    };
  }, []);

  // Render UI
  return <>
    <div>
      from inside component
    </div>
  </>
}


export default App
