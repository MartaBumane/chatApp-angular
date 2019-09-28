import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, switchMap, filter, pluck, first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public uid$ = this.afAuth.user.pipe(
    map(u => u ? u.uid : false)
  );
  public name$ = this.uid$.pipe(
    filter(x => Boolean(x)),
    switchMap(uid => this.afs.doc(`users/${uid}`).valueChanges()),
    filter(doc => Boolean(doc)),
    pluck('name')
  );
  
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
  }


  async login(username: string) {
    if (!username) {
      return;
    }
    const existing = await this.afs
      .collection('users', ref => ref.where('name', '==', username)).get().toPromise();
​
    if (!existing.empty) {
      this.snackbar.open('Such username already exists', 'Close', { duration: 6000 });
      return;
    }
    const result = await this.afAuth.auth.signInAnonymously();
    this.afs.doc(`users/${result.user.uid}`).set({
      name: username
    });
  }

  async logout() {
    await this.afs.doc(`users/${await this.uid$.pipe(first()).toPromise()}`).delete();
    this.afAuth.auth.signOut();
  }

}
