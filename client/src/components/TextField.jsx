

const placeholderOnChange = (e) => {
    console.warn('This TextField has no onChange event handler', e.target)
}

export default function TextField({label, type='text', placeholder, value, onChange=placeholderOnChange, name, error}) {


    const input = <input
                    name={name}
                    onChange={(e) => onChange(e.target.value)}
                    type={type}
                    placeholder={placeholder} 
                    value={value}
                    className={error ? 'TextField-Error' : ''} 
                />

    if(label) {
        return (
            <div className="TextField-Label-Box">
                <label htmlFor={name}>{label}</label>
                {input}
            </div>
        )
    } else {
        return (
            input
        )
    }

}