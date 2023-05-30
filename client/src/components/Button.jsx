import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import {motion} from 'framer-motion';

const placeholderEvent = () => {
    console.warn('This Button does not have an onClick event handler');
}


export default function Button({onClick=placeholderEvent, variant, children, submit=false, text, disabled}) {

    const {theme, staticTheme} = useContext(ThemeContext);

    const baseStyle = {
        background: theme.primaryButton,
        color: staticTheme.text,
    }

    const submitStyle = {
        color: staticTheme.text,
        background: theme.secondaryButton,
    }
    
    const submitButton = <motion.input
                            style={submitStyle}
                            value={text}
                            disabled={disabled}
                            type="submit"
                            whileHover={{scale: 1.1}}
                            whileTap={{
                                scale: 0.9
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 20
                            }}
                        />

    const baseProps = {
        disabled: disabled,
        onClick:onClick,
        disabled:disabled,
        whileHover:{scale: 1.1},
        whileTap:{
            scale: 0.9
        },
        transition:{
            type: 'spring',
            stiffness: 400,
            damping: 20
        }
    }

    const baseButton = <motion.button
                            style={baseStyle}
                            onClick={onClick}
                            disabled={disabled}
                            whileHover={{scale: 1.1}}
                            whileTap={{
                                scale: 0.9
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 20
                            }}
                        >
                            {text} {children}
                        </motion.button>

    if (disabled){
        return (
            <button disabled>{text} {children}</button>
        )    
    }                 
    if(submit) {
        return (
            submitButton
        )
    
    } else {
        switch(variant) {
            case 'danger':
                return (
                    <motion.button className="danger-btn" {...baseProps}>{text} {children}</motion.button>
                )
            case 'warning':
                return (
                    <motion.button className="warning-btn" {...baseProps}>{text} {children}</motion.button>
                )
            case 'success':
                return (
                    <motion.button className="success-btn" {...baseProps}>{text} {children}</motion.button>
                )
            default:
                return (
                    baseButton
                )
        }
        
    }


   

}