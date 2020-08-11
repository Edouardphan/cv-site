import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumeitem',
  templateUrl: './resumeitem.component.html',
  styleUrls: ['./resumeitem.component.scss']
})
export class ResumeitemComponent implements OnInit {
  @Input() resumeitemTitle:string;
  @Input() resumeitemH5:string;
  @Input() resumeitemLocation:string;
  @Input() resumeitemResume:string;
  constructor() { }

  ngOnInit(): void {
  }

}
