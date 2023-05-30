// component Test
import Button from "../components/Button";
import Container from "../components/Container";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';

export default function Test () {

    const {toggleTheme} = useContext(ThemeContext);

    return (
        <Container>
            <h1>Component Test</h1>

            <div style={{
                display: 'flex',
                gap: '1em'
            }}>
                <Button onClick={toggleTheme}>Change Theme</Button>
                <Button onClick={toggleTheme}>Change Theme with Icon <BsFillMoonFill /> </Button>
                <Button text="Submit Button" submit />
                <Button variant='danger' text="Danger Button" />
                <Button variant='warning' text="Warning Button" />
                <Button variant='success' text="Success Button" />
                <Button disabled text="Disabled Button" />
            </div>
        </Container>
    )
}