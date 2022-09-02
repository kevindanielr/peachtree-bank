import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { PaymentOrdersDataHttpMocksProvider } from '@backbase/data-ang/payment-orders';

export const pubsub = { subscribe: () => {}, publish: () => {} };

export const mockProviders = [
  createMocksInterceptor(),
  PaymentOrdersDataHttpMocksProvider
  // @ts-ignore
  //{ provide: PUBSUB, useValue: value },
];