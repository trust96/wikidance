import React from 'react'
const breakpoints = {
    sm:'576px',
    md: '768px',
    lg:'996px'
}

const Breakpoints = React.createContext(breakpoints)



export {Breakpoints}