import ProductPage from "../ProductPage/ProductPage";
import FrontendBook from "../ProductTypes/FrontendBook";
import Router from "../Router/Router";
import Basket from "../Basket/Basket";

class FrontendBooksPage extends ProductPage<FrontendBook> {
    protected readonly products: FrontendBook[] = [
        {id: `fe-001`, name: 'super frontend', price: 5},
        {id: `fe-002`, name: 'just frontend', price: 15},
        {id: `fe-003`, name: 'normal frontend', price: 52},
        {id: `fe-004`, name: 'better frontend', price: 21},
    ]

    public constructor(containerId: string, listingName: string, router: Router, basket: Basket) {
        super(containerId, listingName, router, basket);

    }

    protected readonly productTemplate = ({id, name, price}: FrontendBook): HTMLElement => {
        const element = document.createElement('article')
        const titleElement = document.createElement('p')
        const priceElement = document.createElement('p')
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

        formElement.addEventListener('submit', () => {
            const input = formElement.querySelector(`#product-${id}`) as HTMLInputElement
            const quantity = Number(input.value);
            this.basket.addToBasket({id, name, price, quantity})
            input.value = '0'
        })
        element.appendChild(titleElement)
        element.appendChild(priceElement)
        element.appendChild(formElement)
        return element

    }

}

export default FrontendBooksPage