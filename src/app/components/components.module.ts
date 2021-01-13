import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
 import { TabHeaderComponent } from './tab-header/tab-header.component';
import { HeaderActionComponent } from './header-action/header-action.component';
import { PedDetComponent } from './ped-det/ped-det.component';
// import { GoogleMapsComponent } from './google-maps/google-maps.component';
// import { SignaturePadComponent } from './signature-pad/signature-pad.component';
// import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
// import { TimeCounterComponent } from './time-counter/time-counter.component';
// import { UnlockerComponent } from './unlocker/unlocker.component';
// import { BookingHeaderComponent } from './booking-header/booking-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
     TabHeaderComponent,
     HeaderActionComponent,
     PedDetComponent
    // GoogleMapsComponent,
    // SignaturePadComponent,
    // TimeCounterComponent,
    // UnlockerComponent,
    // BookingHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    // NgbRatingModule
    
  ],
  exports: [
    HeaderComponent,
     TabHeaderComponent,
     HeaderActionComponent,
     PedDetComponent
    // GoogleMapsComponent,
    // SignaturePadComponent,
    // TimeCounterComponent,
    // UnlockerComponent,
    // BookingHeaderComponent
  ]
})
export class ComponentsModule { }