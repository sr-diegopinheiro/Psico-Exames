import { Component, Input} from '@angular/core';
import { PsicoExamesService } from 'src/app/service/psico-exames.service';

@Component({
  selector: 'app-button-exam',
  templateUrl: './button-exam.component.html',
  styleUrls: ['./button-exam.component.css']
})
export class ButtonExamComponent {
  constructor(private service: PsicoExamesService) {}
  exams : string [] = [];

  ngOnInit(): void {    
    this.exams = this.service.getExameList();
    console.log(this.exams );
  }
}
