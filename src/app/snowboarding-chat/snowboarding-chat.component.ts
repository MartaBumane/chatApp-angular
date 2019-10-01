import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ChatMessage } from '../chat-message';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-snowboarding-chat',
  templateUrl: './snowboarding-chat.component.html',
  styleUrls: ['./snowboarding-chat.component.css']
})
export class SnowboardingChatComponent implements OnInit {
  public messages$ = this.afs.collection<ChatMessage>('messages', ref => ref.orderBy('created', 'asc')).snapshotChanges().pipe(
    map(snapshot =>
      snapshot.map(document =>
        ({
          ...document.payload.doc.data({ serverTimestamps: 'estimate' }),
          ref: document.payload.doc.ref
        })))

  );
  public textInput = new FormControl('');

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }

  isLoggedIn$ = this.afAuth.user.pipe(
    map(u => Boolean(u.uid))
  );

  ngOnInit() {
  }

  delete(msg: ChatMessage& {ref:DocumentReference}){
    this.afs.doc(msg.ref).delete();
  }

  canIDelete(msg: ChatMessage):boolean{
    if(this.afAuth.auth.currentUser===null){
      return false;
    }
    return msg.author===this.afAuth.auth.currentUser.uid;
  }

}
