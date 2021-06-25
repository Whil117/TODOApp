import React from "react"

export const Themes = {
    dark:'dark',
    light:'light'
}

const ThemeContext = React.createContext(Themes.dark)

export default ThemeContext