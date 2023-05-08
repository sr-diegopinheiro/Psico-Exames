import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdahComponent } from './tdah.component';

describe('TdahComponent', () => {
  let component: TdahComponent;
  let fixture: ComponentFixture<TdahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
