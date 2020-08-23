import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { DispositivoComponent } from './components/dispositivo.component';
import { LogComponent } from './components/log.component';
import { MedicionComponent } from './components/medicion.component';
import { DispositivoService } from './service/dispositivo.service';
import { LogService } from './service/log.service';
import { MedicionService } from './service/medicion.service';
import {Celsius} from './pipes/celsius.pipe';
import {FormatDate} from './pipes/date.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,    
    DispositivoComponent,
    MedicionComponent,
    LogComponent,
    Celsius,
    FormatDate],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,   
    HttpClientModule,
    FormsModule],
  providers: [
    StatusBar,
    SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ,DispositivoService, LogService, MedicionService],  
  bootstrap: [AppComponent]
})
export class AppModule {}
