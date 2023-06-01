import '../styles/Select.scss';

const placeholder = () => {
    console.warn('This Select has no onChange event handler')
};

// options: array of objects with label and value
export default function Select ({options, onChange=placeholder, value, label}) {

    const selectOptions = options.map((option, index) => {
        return <option key={index} value={option.value}>{option.label}</option>
    })

    if(label) {
        return (
            <div className="SelectLabel-Box">
                <label htmlFor={label}>{label}</label>
                <select className="form-control" id={label} onChange={(e) =>onChange(e.target.value)} value={value}>
                    {selectOptions}
                </select>
            </div>
        )
    } else {
        return (
            <select className="form-control" onChange={(e) =>onChange(e.target.value)} value={value}>
                {selectOptions}
            </select>
        )
    }

}