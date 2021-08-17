import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs'
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('postsListStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px) translateX(50px)' }),
            stagger(
              '550ms',
              animate(
                '100ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class PostsComponent implements OnInit {
  postsData: any;
  userComments: any;
  showLoadAllBtn:Boolean = false;
  showAllPosts: Boolean = false;
  showSpinner:Boolean = false;
  selectedPostId: number = 0;
  @Input() userId: number = 0;
  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getPostsData().subscribe(data => (
      this.postsData = data
    ));
    this._dataService.getCommentsData().subscribe(data => (
      this.userComments = data
    ));
  }

  ngOnChanges(){
    this.showAllPosts = false;
    this.showLoadAllBtn = true;
  }

  loadAll(event:MouseEvent) {
    this.showLoadAllBtn = false;
    this.showAllPosts = true;
  }

  showComments(event:MouseEvent, postId:number){
    if (!this.userComments) {
      this.showSpinner = true;
    }else{
      this.selectedPostId = postId;
      this.showSpinner = false;
    }
  }

}
