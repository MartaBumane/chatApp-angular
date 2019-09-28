import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ChatMessage } from '../chat-message';

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent implements OnInit {

  public messages$ = this.afs.collection<ChatMessage>('messages', ref => ref.orderBy('created', 'asc')).valueChanges();
  public textInput = new FormControl('');
  
  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

}
