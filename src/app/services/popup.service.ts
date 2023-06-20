import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeCentresPopup(data: any): string {
    return `` +
    `<div>Nom: ${ data.name }</}</div>` +
    `<div>Barri: ${ data.neighbourhood }</div>` +
    `<div>Carrer: ${ data.road_name }</div>`+
    `<div>Districte: ${ data.district }</div>`+
    `<div>Codi Postal: ${ data.postalCode }</div>`
   }

}
