import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { firestore } from 'firebase/app';
import { ChatMessage} from '../chat-message';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-message-writter',
  templateUrl: './message-writter.component.html',
  styleUrls: ['./message-writter.component.css']
})
export class MessageWritterComponent implements OnInit {
  public uid$ = this.afAuth.user.pipe(
    map(u => u ? u.uid : false)
  );
  public textInput = new FormControl('');
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  async sendMessage() {
    if (this.textInput.value) {
      this.afs.collection<ChatMessage>('messages').add({
        author: this.afAuth.auth.currentUser.uid,
        text: this.textInput.value,
        created: firestore.FieldValue.serverTimestamp() as any
      });
      this.textInput.setValue('');
    }
  }

  trackBy(_: number, msg:ChatMessage&{ref:DocumentReference}){
    return msg.ref.id;
  }
}
