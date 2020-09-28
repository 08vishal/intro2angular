import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  obj: Object
}
@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { 
    
  }

    getData() { 
      return this.http.get<myData>('https://api.covid19api.com/summary')
      .subscribe(data => {
        console.log("we got", data)
      })
      
   }
}
