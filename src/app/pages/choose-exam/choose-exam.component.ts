import { Component } from '@angular/core';
import { PsicoExamesService } from 'src/app/service/psico-exames.service';

@Component({
  selector: 'app-choose-exam',
  templateUrl: './choose-exam.component.html',
  styleUrls: ['./choose-exam.component.css']
})
export class ChooseExamComponent {

  constructor(private service: PsicoExamesService) {}
  exams : string [] = [];

  ngOnInit(): void {    
    this.exams = this.service.getExameList();
    console.log(this.exams );
  }

}
