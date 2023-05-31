import '../styles/Select.scss';

// options: array of objects with label and value
export default function Select ({options, onChange, value, label}) {

    const selectOptions = options.map((option, index) => {
        return <option key={index} value={option.value}>{option.label}</option>
    })

    if(label) {
        return (
            <div className="SelectLabel-Box">
                <label htmlFor={label}>{label}</label>
                <select className="form-control" id={label} onChange={onChange} value={value}>
                    {selectOptions}
                </select>
            </div>
        )
    } else {
        return (
            <select className="form-control" onChange={onChange} value={value}>
                {selectOptions}
            </select>
        )
    }

}