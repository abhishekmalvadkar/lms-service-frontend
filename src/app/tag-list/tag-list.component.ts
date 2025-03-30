import { Component, OnInit } from '@angular/core';
import { TagService } from '../shared/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lms-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent implements OnInit {

  tags: any = [];
  isNextVisible = true;
  isPreviewsVisible = true;
  pageNo = 1;
  searchText : string = '';

  private debounceTimer: any;

  constructor(private tagService: TagService, private router : Router) { }

  ngOnInit(): void {

    this.getTags();
  }

  getTags() {

    this.tagService.getTags({ pageNo: this.pageNo, searchText : this.searchText }).subscribe(
      (response) => {
        this.isPreviewsVisible = response.data.hasPrevious;
        this.isNextVisible = response.data.hasNext;
        this.tags = response.data.content;
        console.log(this.tags);
      }
    );
  }

  onNext() {
    this.pageNo = this.pageNo + 1;
    this.getTags()

  }

  onPreviews() {
    this.pageNo = this.pageNo - 1;
    this.getTags()

  }

  onDeleteTag(deleteTagRequestId: any) {
    this.tagService.deleteTagById(deleteTagRequestId).subscribe(
      (response) => {
        if (response.success === true && response.code === 204) {
          console.log(response.message);
          this.getTags();
        }
      }
    );
  }

  onSearchChange(){
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(()=> {this.getTags()},300);
    }

}
/*
  MG141230 (PATIL)
  MG141208 (CHAVAN)
  G140924 (KOHINKAR)
  MG140768 (CHAVAN)
  MG140750 (DIVEKAR)
  ===============
  MG136053 (SHELAR)
  7da16970fc491d82c817c128f014711be60263e3
*/
