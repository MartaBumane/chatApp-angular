import { Pipe, PipeTransform } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './user';
import { pluck, map } from 'rxjs/operators'

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {
  constructor(private afs: AngularFirestore){ }

  transform(uid: string): Observable<String> {
    return this.afs.doc<User>(`users/${uid}`).valueChanges().pipe(
      map(x=>x===undefined?{name:'[Deleted]'}:x),
      pluck('name'));
  }

}
