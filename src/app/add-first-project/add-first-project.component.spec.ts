import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirstProjectComponent } from './add-first-project.component';

describe('AddFirstProjectComponent', () => {
  let component: AddFirstProjectComponent;
  let fixture: ComponentFixture<AddFirstProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFirstProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirstProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
