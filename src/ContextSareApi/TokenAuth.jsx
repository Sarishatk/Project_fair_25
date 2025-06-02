import React, { createContext, useState } from 'react'
export const TokenAuthContext = createContext()
function TokenAuth({children}) {
    const [isAutherized, setisAutherized] = useState(false)
  return (
    <>
    
      <TokenAuthContext value={{isAutherized, setisAutherized }}>{children}</TokenAuthContext>
    </>
  )
}

export default TokenAuth
