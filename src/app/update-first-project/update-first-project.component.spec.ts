import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFirstProjectComponent } from './update-first-project.component';

describe('UpdateFirstProjectComponent', () => {
  let component: UpdateFirstProjectComponent;
  let fixture: ComponentFixture<UpdateFirstProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFirstProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFirstProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
