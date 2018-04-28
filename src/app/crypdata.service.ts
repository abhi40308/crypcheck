import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

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
}
