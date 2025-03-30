import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private getLinksUrl = 'http://localhost:9093/api/lms/links/fetch-links';
  private deleteLinkurl = 'http://localhost:9093/api/lms/links/delete-link';
  private addLinkUrl = 'http://localhost:9093/api/lms/links/create-link'

  constructor(private http : HttpClient) { }

  private prepareHeaders(): any {
    return new HttpHeaders({
      'X-User-Id': '01JHCWNZ8TJT54N2XW130WDS8K'
    });
  }


  getLink(linkRequest : any) : Observable<any>{
   const headers =  this.prepareHeaders();
       return this.http.post(this.getLinksUrl,linkRequest,{headers});
  }

  deleteLinkById(linkId : any) : Observable<any>{
   let request = {
      linkId : linkId
    }
    const headers =  this.prepareHeaders();
   return this.http.post(this.deleteLinkurl,request,{headers});

  }

  addLink(addLinkRequest : any) : Observable<any> {
         const headers =  this.prepareHeaders();
    return  this.http.post(this.addLinkUrl,addLinkRequest,{headers})
  }


}
