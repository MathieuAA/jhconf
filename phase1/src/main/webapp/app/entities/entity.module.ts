import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Phase1CategoryModule } from './category/category.module';
import { Phase1ProductModule } from './product/product.module';
import { Phase1CustomerModule } from './customer/customer.module';
import { Phase1AddressModule } from './address/address.module';
import { Phase1WishlistModule } from './wishlist/wishlist.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Phase1CategoryModule,
        Phase1ProductModule,
        Phase1CustomerModule,
        Phase1AddressModule,
        Phase1WishlistModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Phase1EntityModule {}
