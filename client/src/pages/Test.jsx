// component Test
import Button from "../components/Button";
import Container from "../components/Container";
import TextField from "../components/TextField";
import Select from "../components/Select";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';

const testSelectOptions = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
]

export default function Test () {

    const {toggleTheme} = useContext(ThemeContext);

    return (
        <Container>
            <h1>Buttons</h1>

            <Container
                sx={{
                    display: 'flex',
                    gap: '1em'
                }}
            >
                <Button onClick={toggleTheme}>Change Theme</Button>
                <Button onClick={toggleTheme}>Change Theme with Icon <BsFillMoonFill /> </Button>
                <Button text="Submit Button" submit />
                <Button variant='danger' text="Danger Button" />
                <Button variant='warning' text="Warning Button" />
                <Button variant='success' text="Success Button" />
                <Button disabled text="Disabled Button" />
            </Container>
            <h2>Text Fields</h2>
            <Container sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '1em',
            }}>
                <TextField placeholder="Text Field" />
                <TextField placeholder="Number Field" type="number" />
                <TextField placeholder="Password Field" type="password" />
                <TextField placeholder="Email Field" type="email" />
                <TextField label="Label Input" />
                <TextField label="Label Input" error />
            </Container>
            <Container>
                <Select options={testSelectOptions} />
            </Container>
        </Container>
    )
}