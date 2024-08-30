import React from "react";
import "./Input.css";
import "./../../App/App.css";

const Input = ({ className, onChange, type }) => {
    return (
        <>
            {type === "number" && (
                <input
                    className={className}
                    type={type}
                    onChange={onChange}
                    min='0'
                />
            )}
            {type === "text" && (
                <input className={className} type={type} onChange={onChange} />
            )}
        </>
    );
};

export default Input;
