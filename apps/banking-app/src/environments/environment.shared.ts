import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { Environment } from './type';

import { ProductSummaryDataHttpMocksProvider } from '@backbase/data-ang/product-summary';
import { AccountDataHttpMocksProvider } from '@backbase/data-ang/account';
import { TransactionsDataHttpMocksProvider } from '@backbase/data-ang/transactions';
import { CategoriesManagementDataHttpMocksProvider } from '@backbase/data-ang/categories-management';

export const environment: Environment = {
  production: false,
  mockProviders: [
    ProductSummaryDataHttpMocksProvider,
    AccountDataHttpMocksProvider,
    TransactionsDataHttpMocksProvider,
    CategoriesManagementDataHttpMocksProvider,
    createMocksInterceptor()
  ],
};
