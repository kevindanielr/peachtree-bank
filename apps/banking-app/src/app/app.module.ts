import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { ContainersModule } from '@backbase/universal-ang/containers';
import { MegaMenuNavigationContainerModule } from '@backbase/universal-ang/navigation';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';

import { ProductSummaryListWidgetModule, ProductSummaryWidgetAccountSelectorModule } from '@backbase/retail-ang/product-summary';
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions';
import { UsDomesticWireWidgetModule } from '@peachtree/us-domestic-wire-widget';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      features: {
          THEME_V2: true
      }
    }),
    ProductSummaryListWidgetModule,
    /* Add the following two lines */
    ProductSummaryWidgetAccountSelectorModule,
    TransactionsListWidgetModule,
    ContainersModule,
    MegaMenuNavigationContainerModule,
    LayoutContainerModule,
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    UsDomesticWireWidgetModule
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
