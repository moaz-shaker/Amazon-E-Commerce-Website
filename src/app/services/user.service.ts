
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = JSON.parse(localStorage.getItem('users') || '[]');
  private actions: any[] = JSON.parse(localStorage.getItem('actions') || '[]');

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
    this.updateLocalStorage();
  }

  updateUser(index: number, user: any) {
    this.users[index] = user;
    this.updateLocalStorage();
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.updateLocalStorage();
  }

  logAction(action: any) {
    this.actions.push(action);
    localStorage.setItem('actions', JSON.stringify(this.actions));
  }

  getActions() {
    return this.actions;
  }

  private updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
