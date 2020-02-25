import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VpspComponent} from './vpsp/vpsp.component';
import {DpsComponent} from './dps/dps.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FullDpsComponent} from './dps/full-dps/full-dps.component';
import {PapsComponent} from './dps/paps/paps.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {ContainerComponent} from './container/container.component';

const appRoutes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Paris V'},
    children: [
      {
        path: '', component: HomeComponent,
        data: {breadcrumb: null},
      },
      {path: 'vpsp', component: VpspComponent, data: {breadcrumb: 'VPSP'}},
      {
        path: 'dps',
        data: {breadcrumb: 'Type de DPS'},
        children: [
          {path: '', component: DpsComponent, data: {breadcrumb: null}},
          {
            path: 'paps',
            data: {breadcrumb: 'PAPS'},
            children: [
              {
                path: '', component: PapsComponent, data: {breadcrumb: null},
              },
              {
                path: '**', component: ContainerComponent, data: {breadcrumb: null}
              }
            ]
          },
          {path: 'lotA', component: FullDpsComponent, data: {breadcrumb: 'DPS'}}
        ]
      },
      {path: 'pharmacy', component: PharmacyComponent, data: {breadcrumb: 'Pharmacie'}}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VpspComponent,
    DpsComponent,
    PharmacyComponent,
    HomeComponent,
    FullDpsComponent,
    PapsComponent,
    BreadcrumbsComponent,
    ContainerComponent
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
