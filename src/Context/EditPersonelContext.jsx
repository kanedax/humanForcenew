import { createContext, useState } from "react";

export const EditPersonelContext = createContext({
    editId : null,
    setEditId :()=>{}
})

const EditPersonalContainer = ({children})=>{
    const[editId , setEditId] = useState(null)

    return(
        <EditPersonelContext.Provider value={{
            editId,
            setEditId
        }}>
            {children}
        </EditPersonelContext.Provider>
    )
}
export default EditPersonalContainer;