import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { Item } from '@backbase/foundation-ang/web-sdk';
import { ExternalServices } from '@backbase/foundation-ang/start';

import { ProductSummaryDataHttpMocksProvider } from '@backbase/data-ang/product-summary';
import { AccountDataHttpMocksProvider } from '@backbase/data-ang/account';
import { TransactionsDataHttpMocksProvider } from '@backbase/data-ang/transactions';
import { CategoriesManagementDataHttpMocksProvider } from '@backbase/data-ang/categories-management';

import { Environment } from './type';
import { AccessgroupDataHttpMocksProvider } from '@backbase/data-ang/accessgroup';

import { PUBSUB } from '@backbase/foundation-ang/web-sdk';
import pubsub from './simpleEventBus';
import { mockProviders } from './mockproviders';


const services: ExternalServices = {};

const pageModel: Item = {
  name: 'app-container',
  properties: {},
  children: [
    // {
    //   name: 'bb-us-domestic-wire-widget-ang',
    //   properties: {
    //     classId: 'UsDomesticWireWidgetComponent'
    //   }
    // }, 
    {
      "name": "products-widget-0",
      "properties": {
        "classId": "ProductSummaryListWidgetComponent",
      },
      children: [
        {
          "name": "products-widget-0",
          "properties": {
            "classId": "ProductSummaryListWidgetComponent",
          }
        }
      ]
    },
  ],
};

export const environment: Environment = {
  production: false,
  mockProviders: [...mockProviders, { provide: PUBSUB, useValue: pubsub } ],
  bootstrap: {
    pageModel,
    services,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
