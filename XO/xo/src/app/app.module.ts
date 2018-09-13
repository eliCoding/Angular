import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    [NgbModule.forRoot()]
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
