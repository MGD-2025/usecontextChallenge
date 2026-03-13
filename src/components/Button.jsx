import { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"

const Button =() => {
    const {toggle} = useContext(ThemeContext)
    return(
    <button onClick={toggle}>Tema</button>
    )
}


export default Button