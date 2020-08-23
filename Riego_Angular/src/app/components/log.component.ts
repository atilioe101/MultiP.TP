import { LogService } from '../service/log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from '../support/log';
import {FormatDate} from '../pipes/date.pipe';

@Component({
    selector: 'app-log',
    templateUrl:'log.component.html',  
    styleUrls: ['./../../assets/css/materialize.css'],  
    providers: [ FormatDate ]
})

export class LogComponent implements OnInit {
    public log_entry: Log[];
    public title: string;

    constructor(private srv: LogService) {        
    }

    ngOnInit() {
      this.title = 'Log de riegos';
    }   

    public getLogEntry(dispId: number) {
        let self = this;
        this.srv.getAll(dispId.toString())
        .subscribe((data: any) => {          
          self.log_entry = <Log[]> data;         
        });  
    }

}