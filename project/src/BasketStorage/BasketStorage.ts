import LocalStorage from '../LocalStorage/LocalStorage';
import BasketProduct from '../ProductTypes/BasketProduct';

class BasketStorage extends LocalStorage<BasketProduct> {
    private static readonly BASKET_KEY = 'BasketStorage';

    public constructor() {
        super(BasketStorage.BASKET_KEY);

    }
}

export default BasketStorage