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
    type Addition = (firstNumber?: number | string, secondNumber?: number | string) => number

    const addition: Addition = (firstNumber = 0, secondNumber = 0) => {
        const a = typeof firstNumber === 'number' ? firstNumber : Number(firstNumber)
        const b = typeof secondNumber === 'number' ? secondNumber : Number(firstNumber)

        return a + b;

    }
    const ADDITION_BUTTON_ID = 'addition-button'
    const FIRST_NUMBER_ID = 'first-number'
    const NUMBER_CLASS = '.number'
    const RESULT_PLACECHOLDER_ID = 'result-placecholder'
    const SECOND_NUMBER_ID = 'second-number'

    const addButton = document.getElementById(ADDITION_BUTTON_ID);
    addButton?.addEventListener('click', () => {
        const firstNumber = document.getElementById(`#${FIRST_NUMBER_ID}`) as HTMLInputElement | null
        const secondNumber = document.querySelector(SECOND_NUMBER_ID) as HTMLInputElement | null
        const resultPlacecholder = document.getElementById(RESULT_PLACECHOLDER_ID) as HTMLSpanElement | null

        const [firstInput, secondInput] = Array.from(document.querySelectorAll<HTMLInputElement>(NUMBER_CLASS))

        if (!firstInput || !secondInput || !resultPlacecholder) {
            console.error('nie znaleziono wszystkich wymaganych elementow w  funkcji click')
            return;
        }

        const result = addition(firstInput.value, secondInput.value);

        resultPlacecholder.textContent = `${result}`
    })
    console.log('hello')

    return (
        <div className="App">
            <header className="App-header">
                <p>Calculator</p>
                <label>First number:
                    <input id='first-number' className='number' type='number'/>
                </label>

                <label>Second number:
                    <input id='second-number' className='number' type='number'/>
                </label>
                <button id='addition-button' type='button'>Addition</button>
                <p>Result<span id='result-placecholder'>0</span></p>

            </header>
        </div>
    );
}

export default App;
