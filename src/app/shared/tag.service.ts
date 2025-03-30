import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }
  private fetchTagsUrl = 'http://localhost:9093/api/lms/tags/fetch-tags';
  private deleteTagUrl = 'http://localhost:9093/api/lms/tags/delete-tag';
  private addtagUrl = 'http://localhost:9093/api/lms/tags/create-tag';


  getTags(fetchTagsRequest: any): Observable<any> {
    const headers: any = this.prepareHeaders();
    return this.http.post(this.fetchTagsUrl, fetchTagsRequest, { headers });

  }


  private prepareHeaders(): any {
    return new HttpHeaders({
      'X-User-Id': '01JHCWNZ8TJT54N2XW130WDS8K'
    });
  }

  deleteTagById(deleteTagRequestId : any) :
  Observable<any>{
    const headers: any = this.prepareHeaders();
      let deleteTagPostRequest  = {
        tagId : deleteTagRequestId
       }

    return this.http.post(this.deleteTagUrl,deleteTagPostRequest,{headers});

  }

  addTag(addTagRequest : any) : Observable<any>{
    const headers: any = this.prepareHeaders();
      return this.http.post(this.addtagUrl,addTagRequest,{headers})
  }
}
