import React, { createContext, useState } from 'react'
export const addProjectResponseContext = createContext()
function ContextShare({childern}) {
    const [addProjectResponse,setaddProjectResponse] = useState({ })
    
  return (
    <div>
<addProjectResponseContext.Provider value={{addProjectResponse,setaddProjectResponse}}>      {childern}</addProjectResponseContext.Provider> 
    </div>
  )
}

export default ContextShare
