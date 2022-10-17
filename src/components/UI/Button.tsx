import React from 'react';

interface Props {
    children?: JSX.Element |string,
    onClick?: () => void
};

const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;