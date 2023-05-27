import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const placeholderEvent = () => {
    console.warn('This Button does not have an onClick event handler');
}


export default function Button({onClick=placeholderEvent, children, submit=false, text='submit', disabled}) {

    const {theme, staticTheme} = useContext(ThemeContext);

    const baseStyle = {
        background: theme.primaryButton,
        color: staticTheme.text,
    }

    const submitStyle = {
        color: staticTheme.text,
        background: theme.secondaryButton,
    }

    if(submit) {
        return (
            <input style={submitStyle} value={text} type="submit" />
        )
    } else {
        return (
            <button style={baseStyle} onClick={onClick}> {text} {children} </button>
        )
    }


   

}