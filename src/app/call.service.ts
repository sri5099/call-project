import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CallService {
  getData:string="http://riorafashions.com:5002/rioracrm/api/crm/segment"

  constructor(private http:HttpClient) { }

  getResponse(){
     return this.http.get(this.getData);
  }
}
