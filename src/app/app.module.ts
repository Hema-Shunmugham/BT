import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { PostsComponent } from './component/posts/posts.component';

import { CommentsComponent } from './component/comments/comments.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallbackPipe } from './pipes/callback.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
