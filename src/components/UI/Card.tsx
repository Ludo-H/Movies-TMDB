import React from 'react';

type Props = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void
  };

const Card: React.FC<Props> = (props) => {
    return (
        <div onClick={props.onClick} className={`card ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;