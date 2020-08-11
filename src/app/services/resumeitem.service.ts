import { Subject } from 'rxjs'

export class ResumeitemService{

  resumeitemSubject = new Subject<any[]>();
    private resumeitems = [
        {
          title:"Concepteur Développeur d'Applications",
          h5:'2018 - 2020',
          location:'Institut Informatique Sud Aveyron, MILLAU',
          resume:''
        },
        {
          title:'C.A.P Horlogerie (cours du soir)',
          h5:'2011',
          location:'Lycée Diderot, PARIS',
          resume:''
        },
        {
          title:'BAC Sciences Techniques de Laboratoire, Chimie de Laboratoire et procédés industriels',
          h5:'2003',
          location:'Lycée Galillé, Asnières Gennevilliers',
          resume:''
        },
        {
          title:'C.A.P employée Techniques de Laboratoire et procédés industriels',
          h5:'2001',
          location:'Lycée Quinault, PARIS',
          resume:''
        },
      ];
      emitresumeitemSubject() {
        this.resumeitemSubject.next(this.resumeitems.slice());
      }
}
