import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private snackbar: MatSnackBar, 
    private user: CurrentUserService
  ) {}

  ngOnInit() {
  }


  async login(username: string) {
    if (!username) {
      return;
    }
//     const existing = await this.afs
//       .collection('users', ref => ref.where('name', '==', username)).get().toPromise();
// ​
//     if (!existing.empty) {
//       this.snackbar.open('Such username already exists', 'Close', { duration: 6000 });
//       return;
//     }
    const result = await this.afAuth.auth.signInAnonymously();
    this.afs.doc(`users/${result.user.uid}`).set({
      name: username
    });
  }

  async logout() {
    // await this.afs.doc(`users/${await this.uid$.pipe(first()).toPromise()}`).delete();
    this.afAuth.auth.signOut();
  }

}
