import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {PostDetailPageComponent} from "./pages/post-detail-page/post-detail-page.component";

const routes: Routes = [
  {
    path: '', component: PostPageComponent, children: [
      {
        path: ':id', component: PostDetailPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
