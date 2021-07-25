import React from 'react';
import './App.css';
import './global-styles.scss';
import BasketStorage from './BasketStorage/BasketStorage';
import Router from "./Router/Router";
import Basket from "./Basket/Basket";
import FrontendBooksPage from "./FrontendBooksPage/FrontendBooksPage";
import BackendBooksPage from "./BackendBooksPage/BackendBooksPage";

//
// declare global {
//
//     interface Window {
//         basket: BasketStorage
//     }
// }


const redirectFunction = (location: string): void => {
    window.location.hash = `#/${location}`;
}

const frontendButton = document.getElementById('fe-button');
if (frontendButton) {
    frontendButton.addEventListener('click', () => redirectFunction('frontend'))
}


const backendButton = document.getElementById('be-button');
if (backendButton) {
    backendButton.addEventListener('click', () => redirectFunction('backend'))
}
const storage = new BasketStorage()
const router = new Router()
const basket = new Basket('basket', storage)

new FrontendBooksPage('listing-page', 'frontend', router, basket)

new BackendBooksPage('listing-page', 'backend', router, basket)

// export {}


function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>TypeScript z Domanem projekt</h1>
                <div id="basket"></div>
            </header>
            <main className="main">
                <section className="left-panel">
                    <button className="button" id="fe-button">Książki Frontend</button>
                    <button className="button" id="be-button">Książki Backend</button>
                </section>
                <section id="listing-page"></section>
            </main>
        </div>
    );
}

export default App;
