import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VpspComponent} from './vpsp/vpsp.component';
import {DpsComponent} from './dps/dps.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vpsp', component: VpspComponent},
  {path: 'dps', component: DpsComponent},
  {path: 'pharmacy', component: PharmacyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VpspComponent,
    DpsComponent,
    PharmacyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
