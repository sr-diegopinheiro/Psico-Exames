import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questinnaire',
  templateUrl: './questinnaire.component.html',
  styleUrls: ['./questinnaire.component.css']
})
export class QuestinnaireComponent {

  constructor(private activatedRoute : ActivatedRoute) { }

}
