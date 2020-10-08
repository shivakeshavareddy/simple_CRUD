import { Component, OnInit } from '@angular/core';
import { UserCRUDService } from 'src/app/services/user-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'this is exp';

  users = null;

  constructor(private userCRUD: UserCRUDService) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  saveUser(user) {
    this.userCRUD.addUser(user);
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userCRUD.all();
  }

  deletuser(user) {
    this.userCRUD.deleteUser(user);
  }
}
