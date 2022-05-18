import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  @Output() userClick = new EventEmitter()
 
  constructor() { }

  ngOnInit(): void {
  }

  onClick (e: string){
     this.userClick.emit(e)
    //console.log(e)
  }

}
