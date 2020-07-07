import React from 'react';

function Hello({ name, color, isSpecial }) {
    return <div style={{ color }}>{isSpecial && <span># </span>}안녕하세용~ {name}</div>
}
Hello.defaultProps = { name: '이름없음', color: 'gray' };
export default Hello;