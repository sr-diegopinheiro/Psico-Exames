import { Injectable } from '@angular/core';
import { examList } from './mock/exam-list.mock';

@Injectable({
  providedIn: 'root'
})
export class PsicoExamesService {

  constructor() {}

  getExameList(): string []{
    return examList;
  }
}
