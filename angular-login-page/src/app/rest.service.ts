import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient){ 
  }
  getAPIData(url: any) {
    return this.http.get(url);
  }
  putAPIData(url:string, data:any){
    return this.http.put(url,data)
  }
  postAPIData(url:string,data:any){
    return this.http.post(url,data)
  }

}
