import { createContext } from "react";
import { theme } from "../../components/context/theme";
type ThemeContextProviderProps = {
    children: React.ReactNode
}
const ThemeContext = createContext(theme)

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
