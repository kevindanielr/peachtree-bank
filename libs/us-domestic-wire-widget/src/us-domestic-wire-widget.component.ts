import { Component, OnInit } from '@angular/core';

import { PayordOmniPaymentWidgetAngComponent } from '@backbase/payord-omni-payment-widget-ang';
import { CopyRoutes } from '@backbase/foundation-ang/core';

@Component({
  selector: 'bb-us-domestic-wire-widget-ang',
  template: `
    <bb-payord-omni-payment-widget-ang></bb-payord-omni-payment-widget-ang>
  `,
  styles: [
  ]
})
@CopyRoutes(PayordOmniPaymentWidgetAngComponent)
export class UsDomesticWireWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
