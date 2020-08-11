import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumeitemService } from '../services/resumeitem.service';
import { ProgressbarService } from '../services/progressbar.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  progressbars: any[];
  progressbarSubscription: Subscription;
  resumeitems: any[];
  resumeitemsSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
    
  });

  constructor(private resumeitemservice: ResumeitemService,private progressbarservice:ProgressbarService) { }
  
  ngOnInit() {
    this.progressbarSubscription = this.progressbarservice.progressbarsSubject.subscribe(
        (progressbars: any[]) => {
        this.progressbars = progressbars;
      });

    this.resumeitemsSubscription = this.resumeitemservice.resumeitemSubject.subscribe(
      (resumeitems: any[]) => {
      this.resumeitems = resumeitems;
    });
  this.progressbarservice.emitProgressbarsSubject();
  this.resumeitemservice.emitresumeitemSubject();

  }

  ngOnDestroy() {
    this.progressbarSubscription.unsubscribe();
    this.resumeitemsSubscription.unsubscribe();
  }

 

}
