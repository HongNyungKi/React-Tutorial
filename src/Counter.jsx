import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0,
        fixed: '조작 카운터 구현하기',
        etc: {
            real: true,
            age: 27,

        }
    }

    handleIncrease = () => {
        console.log('increase')
        // this.setState(
        //     {
        //         counter: this.state.counter + 1
        //     }
        // )
        this.setState(
            (state) => ({ counter: this.state.counter + 1 })
        )

    }
    handleDecrease = () => {
        console.log('decrease')
        this.setState(
            {
                counter: this.state.counter - 1
            }
        )
    }
    ChangeReal = () => {
        this.setState(
            {
                etc: {
                    ...this.state.etc,
                    real: !this.state.etc.real
                }
            }
        )
        console.log(this.state.etc.real)
    }



    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <button onClick={this.ChangeReal}>real값 바꾸기</button>
                <div>알림: {this.state.fixed}</div>
            </div >
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