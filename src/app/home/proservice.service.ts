import { Injectable } from '@angular/core';
import { Proservice } from './Proservice';

@Injectable({
  providedIn: 'root'
})

export class ProserviceService{
  constructor () {}
  public getProservice() 
  {
      let proservice:Proservice[];
      proservice=[
          new Proservice(1,'iPhone 13',70000),
          new Proservice(2,'iWatch SE',40000),
          new Proservice(3,'Marshall woburn',50000),
          new Proservice(4,'Jbl Partybox1000',80000)
      ]
      return proservice;
  }
}
//STEP-------------2
