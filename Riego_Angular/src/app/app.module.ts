import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { DispositivoComponent } from './components/dispositivo.component';
import { LogComponent } from './components/log.component';
import { MedicionComponent } from './components/medicion.component';
import { DispositivoService } from './service/dispositivo.service';
import { LogService } from './service/log.service';
import { MedicionService } from './service/medicion.service';
import {Celsius} from './pipes/celsius.pipe';
import {FormatDate} from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DispositivoComponent,
    MedicionComponent,
    LogComponent,
    Celsius,
    FormatDate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DispositivoService, LogService, MedicionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
