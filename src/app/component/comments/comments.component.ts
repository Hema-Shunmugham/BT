import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() postId: number = 0;
  @Input() userComments: any;
  filteredItems: any;

  constructor() { }

  ngOnInit(): void {
    this.filteredItems = this.userComments.filter((item: { postId: number; }) => item.postId === this.postId);
  }
}
