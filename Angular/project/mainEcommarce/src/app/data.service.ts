import { Injectable } from '@angular/core';
import { API_URL } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public hc:HttpClient) { }
 getData() {
  return this.hc.get(API_URL);
 }
}
