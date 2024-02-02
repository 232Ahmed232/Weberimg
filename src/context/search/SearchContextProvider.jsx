import React, { useState } from "react";

import searchcontext from "./searchcontext";

const SearchContextProvider= ({children}) =>{
    const [itemlist,setitem] = useState("") 
    return(
        <searchcontext.Provider value={{itemlist,setitem}}>
        {children}
        </searchcontext.Provider>
     )
}




export default SearchContextProvider

