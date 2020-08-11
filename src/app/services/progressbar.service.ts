import {Subject} from 'rxjs'

export class ProgressbarService{

  progressbarsSubject = new Subject<any[]>();
    private progressbars = [
        {
        skill:'Anglais (TOEIC : 490)',
        value:'55'
      },
      {
        skill:'Chinois (cantonnais)',
        value:'60'
      },
      {
        skill:'HTML',
        value:'60'
      },
      {
        skill:'CSS',
        value:'55'
      },
      {
        skill:'JavaScript/Jquery',
        value:'45'
      },
      {
        skill:'C#',
        value:'65'
      },
      {
        skill:'Java EE',
        value:'15'
      },
      {
        skill:'SQL/PL SQL',
        value:'70'
      },
      {
        skill:'node.JS',
        value:'45'
      },
      {
        skill:'TypeScript',
        value:'45'
      }
      
    ];

    emitProgressbarsSubject() {
      this.progressbarsSubject.next(this.progressbars.slice());
    }
  
}
