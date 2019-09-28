import { firestore } from 'firebase/app';

export interface ChatMessage {
    text:string;
    created: firestore.Timestamp;
    author:firestore.DocumentReference;
}
