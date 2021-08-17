import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  //get users data from public api
  getUsersData() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  //get posts data from public api
  getPostsData()  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  //get comments data from public api
  getCommentsData(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }
}
