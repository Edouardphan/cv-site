import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {Routes,RouterModule} from '@angular/router';
import { ResumeitemService } from './services/resumeitem.service';
import { ProgressbarService } from './services/progressbar.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ResumeitemComponent } from './resumeitem/resumeitem.component';


const appRoutes: Routes = [
  { path: 'accueil', redirectTo: '' },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    ProgressbarComponent,
    ResumeitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ResumeitemService,
    ProgressbarService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
