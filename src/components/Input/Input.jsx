import React from "react";
import "./Input.css";
import "./../../App/App.css";

const Input = ({ className, onChange, type, name, value }) => {
    return (
        <>
            {type === "number" && (
                <input
                    className={className}
                    type={type}
                    onChange={onChange}
                    name={name}
                    value={value}
                    min='0'
                />
            )}
            {type === "text" && (
                <input className={className} type={type} onChange={onChange} name={name} value={value} />
            )}
        </>
    );
};

export default Input;
