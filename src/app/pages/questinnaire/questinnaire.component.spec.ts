import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestinnaireComponent } from './questinnaire.component';

describe('QuestinnaireComponent', () => {
  let component: QuestinnaireComponent;
  let fixture: ComponentFixture<QuestinnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestinnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestinnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
