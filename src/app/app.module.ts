import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { MessageBlockComponent } from './message-block/message-block.component';
import { MessageWritterComponent } from './message-writter/message-writter.component';
import { AuthorNamePipe } from './author-name.pipe';
import { EditNameComponent } from './edit-name/edit-name.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SnowboardingChatComponent } from './snowboarding-chat/snowboarding-chat.component';
import { SkatingChatComponent } from './skating-chat/skating-chat.component';
import { SurfingChatComponent } from './surfing-chat/surfing-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageBlockComponent,
    MessageWritterComponent,
    AuthorNamePipe,
    EditNameComponent,
    RoomsComponent,
    SnowboardingChatComponent,
    SkatingChatComponent,
    SurfingChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
