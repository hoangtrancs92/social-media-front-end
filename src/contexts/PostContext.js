import {createContext, useState} from "react";

export const CreatePostContext = createContext({});

export const  CreatePostProvider = ({ children }) => {
    const [createPost, setCreatePost] = useState({})

    return <CreatePostContext.Provider value={ {createPost, setCreatePost} }>
        {children}
    </CreatePostContext.Provider>
}
