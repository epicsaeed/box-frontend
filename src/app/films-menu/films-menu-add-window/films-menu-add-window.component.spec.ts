import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsMenuAddWindowComponent } from './films-menu-add-window.component';

describe('FilmsMenuAddWindowComponent', () => {
  let component: FilmsMenuAddWindowComponent;
  let fixture: ComponentFixture<FilmsMenuAddWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsMenuAddWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsMenuAddWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
