import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostPageComponent} from "./pages/post-page/post-page.component";
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';




@NgModule({
  declarations: [
    PostPageComponent,
    PostComponent,
    PostsComponent,
    PostDetailComponent,
    PostDetailPageComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
