import { Component } from '@angular/core';
import { Wakanda } from './wakanda.service';

@Component({
  moduleId: module.id,
  selector: 'application-app',
  templateUrl: 'application.component.html',
  styleUrls: ['application.component.css'],
  providers :[Wakanda]
})
export class ApplicationAppComponent {
  title = 'application works!';

  wakandaClientVersion: string;
  constructor(private _wakanda: Wakanda) {
  		this.wakandaClientVersion = this._wakanda.wakandaClientVersion;
   }
}
