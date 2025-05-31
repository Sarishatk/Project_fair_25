import React, { createContext, useState } from 'react'
export const addProjectResponseContext = createContext()
export const EditShareResponseContext = createContext();
function ContextShare({children}) {
    const [addProjectResponse,setaddProjectResponse] = useState({})
     const [editResponse,seteditResponse] = useState({})
  return (
    <>
     <addProjectResponseContext.Provider value={{addProjectResponse,setaddProjectResponse}}>
      <EditShareResponseContext value={{editResponse,seteditResponse}}>
      {children}
      </EditShareResponseContext> 
      </addProjectResponseContext.Provider>
    </>
  )
}

export default ContextShare
