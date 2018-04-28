import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CrypdataService {

  private baseUrl: string = 'https://api.coinmarketcap.com/v1/ticker/';

  constructor(private http: Http) { }

  getcurr(id : string){
  	  return this.http.get(`https://api.coinmarketcap.com/v1/ticker/`+id).map((res:Response) => res.json());
  }
 
  getall(){
	  return this.http.get(`https://api.coinmarketcap.com/v1/ticker/`).map((res:Response) => res.json());
  }

  public data$: BehaviorSubject<any> = new BehaviorSubject({});

  updateData() {
    let data = this.http.get('https://api.coinmarketcap.com/v1/ticker/').map((data)=>{
        return data.json();
    }).do((data)=>{
        this.data$.next(data);
    })
}
}
