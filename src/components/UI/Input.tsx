import React from 'react';

const Input= React.forwardRef((props: {
        label?: string,
        input: {
            id?: string,
            type?: string,
            min?: string,
            max?: string,
            step?: string,
            defaultValue?: string,
            placeholder?: string,
            value?: string,
            required?: boolean
        },
        onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void
    }, ref: React.Ref<HTMLInputElement>) => {
    return (
        <div className='input'>
            {/* <label htmlFor={props.input?.id}>{props.label}</label> */}
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;