import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsMenuToolbarComponent } from './films-menu-toolbar.component';

describe('FilmsMenuToolbarComponent', () => {
  let component: FilmsMenuToolbarComponent;
  let fixture: ComponentFixture<FilmsMenuToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsMenuToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsMenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
