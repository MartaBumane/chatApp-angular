import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CurrentUserService } from '../current-user.service';
import { FormControl } from '@angular/forms';
import { first, distinctUntilChanged, takeUntil, debounceTime, withLatestFrom } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from '../user';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-name',
  template: `
    <mat-form-field>
      <input [formControl]='name' matInput placeholder="User Name">
    </mat-form-field> 
  `,
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit, OnDestroy {
  name = new FormControl('');
  private unsubscribe$= new Subject<void>();

  constructor(
    private auth: AngularFireAuth,
    private user: CurrentUserService, 
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.user.name$.pipe(first()).subscribe(user => {
      this.name.setValue(user);

    });

    this.name.valueChanges.pipe(
      takeUntil(this.unsubscribe$), 
      debounceTime(1000),
      distinctUntilChanged(),
      withLatestFrom(this.user.uid$)
      ).subscribe(([name, uid])=>{
        this.afs.doc<User>(`users/${uid}`).update({name});
      });

  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
