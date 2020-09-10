import React, { Component } from 'react';

// function Hello({ name, color, age, isSpecial }) {
//     return (
//         <div style={{ color }}>
//             {isSpecial && <span> @@ </span>}안녕하세요 {name}({age}) 씨
//         </div>
//     )
// }

class Hello extends Component {
    static defaultProps = {
        color: 'green',
        name: '이름없음',
        isSpecial: false
    }

    render() {
        const { color, isSpecial, name } = this.props
        return (
            <div style={{ color }}>
                {isSpecial && <span> ^_^ </span>}
                {name} 씨 안녕하세요!
            </div >
        )
    }
}


// Hello.defaultProps = { name: '녕기친구', color: 'green' }

export default Hello;