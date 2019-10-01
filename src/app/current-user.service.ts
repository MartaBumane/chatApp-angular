import { Injectable } from '@angular/core';
import { map, filter, switchMap, pluck } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
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
    private afs: AngularFirestore
  ) { }
}
