// component Test
import Button from "../components/Button";
import Container from "../components/Container";
import TextField from "../components/TextField";
import Select from "../components/Select";
import Typography from "../components/Typography";

import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";

import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';

const testSelectOptions = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
]

export default function Test () {

    const {toggleTheme} = useContext(ThemeContext);

    const [textFieldState, setTextFieldState] = useState('');
    const [selectState, setSelectState] = useState(null);

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography type="h1">Food UI</Typography>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Container>
                    <Typography type="h1">Heading 1</Typography>
                    <Typography type="h2">Heading 2</Typography>
                    <Typography type="h3">Heading 3</Typography>
                    <Typography type="h4">Heading 4</Typography>
                    <Typography type="h5">Heading 5</Typography>
                    <Typography type="h6">Heading 6</Typography>
                </Container>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '50%'
                    }}
                >
                    <h3>Lorum Ipsom Text Block</h3>
                    <Typography type="p"> <a href="">Lorem Ipsum</a> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    <Typography type="p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
                </Container>
            </Container>
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
            <Typography type="h3">State: {textFieldState}</Typography>
            <Container sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '1em',
            }}>
                <TextField value={textFieldState} onChange={setTextFieldState} placeholder="Text Field" />
                <TextField value={textFieldState} onChange={setTextFieldState} placeholder="Number Field" type="number" />
                <TextField value={textFieldState} onChange={setTextFieldState} placeholder="Password Field" type="password" />
                <TextField value={textFieldState} onChange={setTextFieldState} placeholder="Email Field" type="email" />
                <TextField value={textFieldState} onChange={setTextFieldState} label="Label Input" />
                <TextField value={textFieldState} onChange={setTextFieldState} label="Label Input" error />
            </Container>
            <Container>
                <h2>Select</h2>
                <Typography type="h3">State: {selectState}</Typography>
                <Select value={selectState} onChange={setSelectState} options={testSelectOptions} />
            </Container>
        </Container>
    )
}