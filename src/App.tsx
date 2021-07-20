import React from 'react';
import './App.css';

function App() {

    // function addition(firstNumber:number | string =0, secondNumber:number |string =0) {
    //  const a = typeof firstNumber === 'number' ? firstNumber : Number(firstNumber)
    //     const b = typeof secondNumber === 'number' ? secondNumber : Number(firstNumber)
    //
    //     return a+ b;
    //
    // }
    function addition(firstNumber:number | string =0, secondNumber:number |string =0) {
        const a = typeof firstNumber === 'number' ? firstNumber : Number(firstNumber)
        const b = typeof secondNumber === 'number' ? secondNumber : Number(firstNumber)

        return a+ b;
        
    }
    const result = addition(2,'3')
    console.log(result)

    return (
        <div className="App">
            <header className="App-header">
                <p>Ts</p>

            </header>
        </div>
    );
}

export default App;
