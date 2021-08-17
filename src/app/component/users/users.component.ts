import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  usersData$:any;
  showUserPosts:Boolean = false;
  showSpinner:Boolean = false;
  selectedUserId: number = 0;
  constructor(private _dataService:DataService) { }
  ngOnInit() {
    this._dataService.getUsersData().subscribe(data => (
      this.usersData$ = data
    ));
  }

  onClick(event: MouseEvent, userId: number) {
    if (!this.usersData$) {
      this.showSpinner = true;
    }else{
      this.selectedUserId = userId;
      this.showUserPosts = true;
      this.showSpinner = false;
    }
  }

}
