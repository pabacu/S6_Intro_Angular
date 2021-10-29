import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEscenaComponent } from './app-escena.component';

describe('AppEscenaComponent', () => {
  let component: AppEscenaComponent;
  let fixture: ComponentFixture<AppEscenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEscenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEscenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
