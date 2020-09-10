import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.Increase = this.Increase.bind(this)
        this.Decrease = this.Decrease.bind(this)
        this.state = {
            counter: 0,
            fixed: '카운터 구현하기',
            etc: {
                name: '홍녕기',
                real: true
            }
        }
    }

    Increase() {
        console.log('+1')
        this.setState(
            (state) => ({ counter: state.counter + 1 })
        )
        this.setState(
            (state) => ({ counter: state.counter + 1 })
        )
    }
    Decrease() {
        console.log('-1')
        this.setState(
            {
                counter: this.state.counter - 1
            }
        )
        this.setState(
            {
                counter: this.state.counter - 1
            }
        )
    }
    ChangeReal = () => {
        console.log(this.state.etc.real)
        this.setState(
            {
                etc: {
                    ...this.state.etc,
                    real: !this.state.etc.real
                }
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.Increase}>+1</button>
                <button onClick={this.Decrease}>-1</button>
                <div>
                    <button onClick={this.ChangeReal}>real값 바꾸기</button>
                </div>
                <div>{this.state.fixed}</div>
            </div>
        )
    }
}
// import { useState } from 'react';

// function Counter() {
//     const [number, setNumber] = useState(0)

//     const onIncrease = () => {
//         setNumber(number + 1)
//     } 
//     const onDecrease = () => {
//         setNumber(number - 1)
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;