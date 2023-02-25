import { users } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';
import { TasksDataService } from 'src/app/services/tasks-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public admin = users.filter(user => user.status === "admin")[0];

  constructor() { }

  ngOnInit(): void {
  }

}
