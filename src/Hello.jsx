import React from 'react';

function Hello({ name, color, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <span>#</span>}안녕하세요{name}씨!
        </div>
    )
}

Hello.defaultProps = { name: '이름없음', color: 'green' }
export default Hello;