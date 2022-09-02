import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { UsDomesticWireWidgetComponent } from './us-domestic-wire-widget.component';

import { PayordOmniPaymentWidgetAngModule } from '@backbase/payord-omni-payment-widget-ang';
import { BB_PAYMENT_CONFIG, US_DOMESTIC_WIRE, SEPA } from '@backbase/payment-orders-ang/configs';

@NgModule({
  declarations: [UsDomesticWireWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { UsDomesticWireWidgetComponent }
    }),
    PayordOmniPaymentWidgetAngModule.withConfig({
      paymentType: SEPA,
      businessFunction: 'SEPA',
      classId: 'UsDomesticWireWidgetComponent'
  }),
  ],
})
export class UsDomesticWireWidgetModule { }