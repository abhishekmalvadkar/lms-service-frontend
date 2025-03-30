import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { LinkService } from '../shared/link.service';

interface MetaDataDetails {
  firstLogin: boolean;
  lastLoginTime: string;
  metaData?: {
    tagDropdownOptions?: { value: string; key: string }[];
  };
}

@Component({
  selector: 'lms-add-link',
  templateUrl: './add-link.component.html',
  styleUrl: './add-link.component.css'
})
export class AddLinkComponent implements OnInit {

  tags: { key: string | number; value: string }[] = [];
  selectedTags = [];
  constructor(private linkService : LinkService, private localStorageService  : LocalStorageService ){

  }
  ngOnInit(): void {
    const metaDataDetails = this.localStorageService.get<MetaDataDetails>('metaDetails');

    if (metaDataDetails?.metaData?.tagDropdownOptions) {
      this.tags = metaDataDetails.metaData.tagDropdownOptions;
      console.log(this.tags);

    } else {
      console.warn('metaDataDetails is null/undefined or missing tagDropdownOptions.');
      this.tags = [];
    }

  }








  addLinkRequest = {
    title:'',
    url:'',
    tagIds:[]
  }

  addLink(){
    console.log(this.addLinkRequest);
    this.linkService.addLink(this.addLinkRequest).subscribe(
     (response)=>{
           console.log(response);
     }
    );

  }

}
