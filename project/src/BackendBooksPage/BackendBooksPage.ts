import ProductPage from "../ProductPage/ProductPage";
import BackendBook from "../ProductTypes/BackendBooks";
import Router from "../Router/Router";
import Basket from "../Basket/Basket";

class BackendBooksPage extends ProductPage<BackendBook> {
    protected readonly products: BackendBook[] = [
        {backendLanguage: 'Java', id: `ba-001`, name: 'super backend', price: 5},
        {backendLanguage: 'Java', id: `ba-002`, name: 'just backend', price: 15},
        {backendLanguage: 'GoLang', id: `bae-003`, name: 'normal backend', price: 52},
        {backendLanguage: 'C#', id: `ba-004`, name: 'better backend', price: 21},
    ]

    public constructor(containerId: string, listingName: string, router: Router, basket: Basket) {
        super(containerId, listingName, router, basket);

    }

    protected readonly productTemplate = ({id, name, price, backendLanguage}: BackendBook): HTMLElement => {
        const element = document.createElement('article')
        const titleElement = document.createElement('p')
        const priceElement = document.createElement('p')
        const languageElement = document.createElement('p')
        const formElement = document.createElement('form')

        formElement.innerHTML = `
        <label>
            Ilość:
            <Input id="product-${id}" type="number" required value="0" />
         </label>
         <button type="submit">Dodaj do koszyka</button>
`.trim()
        titleElement.textContent = name
        priceElement.textContent = price.toFixed(2)
        languageElement.textContent = backendLanguage

        formElement.addEventListener('submit', () => {
            const input = formElement.querySelector(`#product-${id}`) as HTMLInputElement
            const quantity = Number(input.value);
            this.basket.addToBasket({id, name, price, quantity})
            input.value = '0'
        })
        element.appendChild(titleElement)
        element.appendChild(priceElement)
        element.appendChild(formElement)
        element.appendChild(languageElement)
        return element

    }

}

export default BackendBooksPage