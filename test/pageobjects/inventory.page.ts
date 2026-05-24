import { $ } from '@wdio/globals'
import Page from './page';

class InventoryPage extends Page {
    
    public get pageTitle () {
        return $('.title');
    }

    public get productList () {
        return $$('.inventory_item');
    }

    public get shoppingCartBadge () {
        return $('.shopping_cart_badge');
    }

    public get firstCartItem() {
        return $('//a[@id="item_4_title_link"]/div');
    }

    public open () {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();