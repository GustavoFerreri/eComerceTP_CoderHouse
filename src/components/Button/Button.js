// import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--secondary'
]

const SYZE = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const btnClass = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const btnSize = SYZE.includes(buttonSize) ? buttonSize : SYZE[0]
    return(
        <button className={`btn ${btnClass} ${btnSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
