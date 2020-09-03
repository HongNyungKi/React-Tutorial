import React from 'react';

function Wrapper({ children }) {
    const style = {
        background: 'black',
        border: '1px solid green'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}
export default Wrapper;