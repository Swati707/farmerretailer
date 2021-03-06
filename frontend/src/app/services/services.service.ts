import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesService {

  farmer:any;
  user:any;

  constructor(private http:Http) {

   }

registerFarmer(farmer){
 let headers = new Headers();
 headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/api/farmer',farmer,{headers:headers})
  .map(res => res.json());
}

authUser(user){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/api/login',user,{headers:headers})
   .map(res => res.json());
}

}
