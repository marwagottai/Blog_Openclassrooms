import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() BlogName:String;
  @Input() BlogContent:String;
  @Input() BlogLoveIts:number;
  @Input() BlogDateC:Date;
  loveCount :number=0;
  DonLoveCount :number=0;
  constructor() { }

  ngOnInit() {
  }
  loveIt(){
    this.loveCount=this.loveCount + 1 ;
    console.log(this.loveCount);
  }
  DntloveIt(){
    this.DonLoveCount =this.DonLoveCount + 1 ;
    console.log(this.DonLoveCount);
  }
  getscore() {
  this.BlogLoveIts=this.loveCount - this.DonLoveCount ;
  return this.BlogLoveIts;

   }

}
