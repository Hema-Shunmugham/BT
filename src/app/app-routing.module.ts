import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { CommentsComponent } from './component/comments/comments.component';
import { PostsComponent } from './component/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'comments/:id',
    component: CommentsComponent
  },
  {
    path: 'posts/:id',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
