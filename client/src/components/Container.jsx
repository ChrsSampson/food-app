import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function Container ({children, sx}) {

    const {theme} = useContext(ThemeContext);

    return (
        <section style={{
            background: theme.background,
            color: theme.text,
            transition: 'all 0.5s ease',
            padding: '1rem',
            ...sx
        }}>
            {children}
        </section>
    )


}