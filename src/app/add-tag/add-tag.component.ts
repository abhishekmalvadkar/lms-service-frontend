import { Component } from '@angular/core';
import { TagService } from '../shared/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lms-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrl: './add-tag.component.css'
})
export class AddTagComponent {

  addTagRequest = {
    tagName : ''
  }

constructor(private tagService : TagService, private router : Router){

}


addTag(){
   this.tagService.addTag(this.addTagRequest).subscribe(
    (response)=>{

        console.log(response);
        this.addTagRequest.tagName = '';
        this.router.navigate(['tag-list']);
    }
  );
}



}
