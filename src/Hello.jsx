import React from 'react';

function Hello({ name, color, age = 27, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <span> @@ </span>}안녕하세요 {name}({age}) 씨
        </div>
    )
}
Hello.defaultProps = { name: '녕기친구', color: 'green' }

export default Hello;