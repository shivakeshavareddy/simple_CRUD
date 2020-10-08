import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserCRUDService {
  users = [
    { name: 'shiva', details: 'student' },
    { name: 'kvothe', details: 'legend' },
    { name: 'kote', details: 'bartender' },
  ];

  constructor() {}
  addUser(user) {
    this.users.push(user);
  }

  deleteUser(user) {
    console.log('userDeleted');
  }

  updateUser(user) {
    console.log('userUpdated');
  }

  all() {
    return this.users;
  }
}
