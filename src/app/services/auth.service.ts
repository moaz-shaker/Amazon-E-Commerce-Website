import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  constructor(private fbAuth: AngularFireAuth, private ngZone:NgZone,
    private router: Router) {
    this.fbAuth.authState.subscribe(user=>{
      if(user){
        this.userData =user;
        localStorage.setItem('user', this.userData.email)
        }
    })
  }
  signIN(email: string,password: any){
    return this.fbAuth.signInWithEmailAndPassword(email,password)
    .then((result)=>{
      this.router.navigate(['/'])
    }).catch((error)=>{
      window.alert(error.message)
    })
  }
  signUp(email:string,password:any){
    return this.fbAuth.createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      this.router.navigate(['/'])
    }).catch((error)=>{
      window.alert(error.message)
    })
  }
  logOut(){
    return this.fbAuth.signOut().then(()=>{
      localStorage.removeItem('user')
      this.router.navigate(['login'])
  })
  }

  isLoggedIN(){
    const user =localStorage.getItem('user')
    return user? true:false;
  }
  getUser(){
    const user =localStorage.getItem('user')
    return user? user:null;
  }
}
