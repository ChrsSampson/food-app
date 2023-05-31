import {useState, useEffect} from 'react';

export default function useLocalStorage (key, initialValue = null) {

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);


    const handleValueChange = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }

    useEffect(() => {
        const valueStr = localStorage.getItem(key);
        if (valueStr) {
            setValue(JSON.parse(valueStr));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            setValue(initialValue);
        }
    }, []);

    return [value, handleValueChange];
}