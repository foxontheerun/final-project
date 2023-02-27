import { users } from 'src/app/common/constants';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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
