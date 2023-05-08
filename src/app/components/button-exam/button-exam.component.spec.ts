import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExamComponent } from './button-exam.component';

describe('ButtonExamComponent', () => {
  let component: ButtonExamComponent;
  let fixture: ComponentFixture<ButtonExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
