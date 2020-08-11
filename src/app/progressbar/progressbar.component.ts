import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input() progressbarSkill:string;

  @Input() progressbarValue:number;

  result:string;

  constructor() { }

  ngOnInit(): void {
  }

  getProgressbar() {
    return this.progressbarValue;
  }
  getProgressbarpourcent() {

    this.result = this.progressbarValue+"%"
    return this.result;
  }
}