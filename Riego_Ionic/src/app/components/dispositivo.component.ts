import { DispositivoService } from '../service/dispositivo.service';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Injector, ApplicationRef } from '@angular/core';
import {DispositivoItem} from '../support/dispositivo';
import {Celsius} from '../pipes/celsius.pipe';

import {LogComponent} from './log.component';
import {MedicionComponent} from './medicion.component';

import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-dispositivo',
    templateUrl:'dispositivo.component.html',
    styleUrls: ['dispositivo.component.css', './../../assets/css/materialize.css'],
    providers: [ Celsius ]
})

export class DispositivoComponent implements OnInit { 
  private prefix_content_msre: string = 'content_msre_';  
  private prefix_content_log: string = 'content_log_';   

    public dispositivos: Array<DispositivoItem>;
    public title: string;

    constructor(private srv: DispositivoService
      ,private componentFactoryResolver: ComponentFactoryResolver
      ,private viewContainerRef: ViewContainerRef
      ,private injector: Injector
      ,private app: ApplicationRef
      ,private platform: Platform) {              
    }

    ngOnInit() {
      this.title = 'Dispositivos';
      let self = this;
      this.srv.getAll()
      .subscribe((data: any) => {        
        self.dispositivos = <DispositivoItem[]> data; 
      });  
    }   

    getTempRango(str: string) {
      let value: number = parseInt(str);

      if (isNaN(value)) return 1;
      if (value < 10)
        return 1;
      if (value < 30)
        return 2;     
      return 3;
    };

    getEstadoValvula(row: DispositivoItem): boolean {      
      let value: number = row.electrovalvula.activo;

      if (isNaN(value)) return false;
      if (value > 0)
        return true;    
      return false;
    };

    updEstadoValvula(evt: any, row: DispositivoItem) {      
      let estado : number = (evt.target.checked)?  1 : 0;  
      let self  = this;    
      this.srv.updValvula(row, estado);  
      setTimeout(function(){ self.displayLog(row, true); }, 1000);
    }

    private clearElement(nodeElement: HTMLElement) {
      while (nodeElement.firstChild) {
        nodeElement.firstChild.remove();
      }
    }

    displayLog(row:DispositivoItem, refresh ?: boolean) {   
      let nodeElementLog: HTMLElement = document.getElementById(this.prefix_content_log + row.dispositivoId);
      let nodeElementMsr: HTMLElement = document.getElementById(this.prefix_content_msre + row.dispositivoId);     

      this.clearElement(nodeElementMsr);
      if (nodeElementLog.childNodes?.length > 0) {
        this.clearElement(nodeElementLog);        
        if (!refresh) return;
      } else if (refresh) {
        return;
      }     
      const factory = this.componentFactoryResolver.resolveComponentFactory(LogComponent);      
      const ref = factory.create(this.injector, [], nodeElementLog);
      ref.instance.getLogEntry(row.dispositivoId);
      this.app.attachView(ref.hostView);   
      return false; 
    }

    displayMedicion(row:DispositivoItem) {   
      let nodeElementLog = document.getElementById(this.prefix_content_log + row.dispositivoId);
      let nodeElementMsr = document.getElementById(this.prefix_content_msre + row.dispositivoId);  
     
      this.clearElement(nodeElementLog);
      if (nodeElementMsr.childNodes?.length > 0) {
        this.clearElement(nodeElementMsr);
        return;
      }     
      const factory = this.componentFactoryResolver.resolveComponentFactory(MedicionComponent);      
      const ref = factory.create(this.injector, [], nodeElementMsr);
      ref.instance.getLogEntry(row.dispositivoId);
      this.app.attachView(ref.hostView);  
      return false;     
    }   
}