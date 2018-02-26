import { Injectable } from '@angular/core';

import { MarketService } from 'app/core/market/market.service';
import { MarketStateService } from 'app/core/market/market-state/market-state.service';

@Injectable()
export class TemplateService {

  constructor(
    private market: MarketService,
    private marketState: MarketStateService
  ) { }

  // template add 1 "title" "short" "long" 80 "SALE" "PARTICL" 5 5 5 "Pasdfdfd"
  add(title: string,
    shortDescr: string,
    longDescr: string,
    categoryIdOrName: number | string,
    paymentType: string, // TODO: enum
    currency: string, // TODO: enum
    basePrice: number,
    domesticShippingPrice: number,
    internationalShippingPrice: number,
    paymentAddress: string // TODO: class
    ) {
      const params  = [
                        'add',
                        title,
                        shortDescr,
                        longDescr,
                        categoryIdOrName, 
                        paymentType,
                        currency,
                        basePrice,
                        domesticShippingPrice,
                        internationalShippingPrice,
                        paymentAddress
                      ];
    return this.market.call('template', params);
  }

  search(page: number, pageLimit: number, profileId: number) {
    return this.market.call('template', ['search', page, pageLimit, "ASC", profileId]);
  }

  post(listingTemplateId: number, marketId: number) {
    return this.market.call('template', ['post', listingTemplateId, marketId]);
  }

  remove(listingTemplateId: number) {
    return this.market.call('template', ['remove', listingTemplateId]);
  }
}
