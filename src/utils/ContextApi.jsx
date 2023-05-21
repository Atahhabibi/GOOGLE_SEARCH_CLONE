import { createContext, useState } from "react";

// <script async src="https://cse.google.com/cse.js?cx=c1202d3cfaeab42b6">
//</script>
//<div class="gcse-search"></div>


export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch,setImageSearch]=useState(false);
    const [globalQuery, setGlobalQuery] = useState("")

    const contextValue={
        imageSearch,
        setImageSearch,
        setGlobalQuery,
        globalQuery,

    }


    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>
};
