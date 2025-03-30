import { Component } from '@angular/core';
import { LinkService } from '../shared/link.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'lms-link-list',
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.css'
})
export class LinkListComponent {

  links : any  = [];
  pageNo = 1;
  searchText = '';
  isShowNext = false;
  isShowPreviews = false;
  private debounceTimer: any;

  constructor(private linkService : LinkService){

  }


  ngOnInit(): void {

    this.getLinks();

  }

  getLinks(){

    this.linkService.getLink({pageNo : this.pageNo,searchText:this.searchText})
    .subscribe(
      (response)=>{
        this.isShowNext = response.data.hasNext;
        this.isShowPreviews = response.data.hasPrevious;
        this.links = response.data.content;
        console.log(this.links);
      }
    );

  }

  onNext(){
    this.pageNo = this.pageNo+1;
    this.getLinks();
  }

  onPreviews(){
    this.pageNo = this.pageNo-1;
    this.getLinks();
  }

  onDeleteLink(linkId : any){
       this.linkService.deleteLinkById(linkId).subscribe(
         (response)=>{
             console.log(response);
             this.getLinks();
         }
       );
  }

  onSearchChange(){
    console.log("onserach")
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(()=> {this.getLinks()},300);
  }





}
