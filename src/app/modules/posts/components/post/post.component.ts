import {Component, Input} from '@angular/core';
import {IPost} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post:IPost

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  getDetail():void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }

}
