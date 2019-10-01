import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageBlockComponent } from './message-block/message-block.component';
import { SnowboardingChatComponent } from './snowboarding-chat/snowboarding-chat.component';
import { SkatingChatComponent } from './skating-chat/skating-chat.component';
import { SurfingChatComponent } from './surfing-chat/surfing-chat.component';

const routes: Routes = [
  { path: '', component: MessageBlockComponent},
  { path: 'snowboarding', component: SnowboardingChatComponent },
  { path: 'skating', component: SkatingChatComponent },
  { path: 'surfing', component: SurfingChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
