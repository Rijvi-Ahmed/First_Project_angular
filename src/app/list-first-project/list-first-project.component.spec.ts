import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFirstProjectComponent } from './list-first-project.component';

describe('ListFirstProjectComponent', () => {
  let component: ListFirstProjectComponent;
  let fixture: ComponentFixture<ListFirstProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFirstProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFirstProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
