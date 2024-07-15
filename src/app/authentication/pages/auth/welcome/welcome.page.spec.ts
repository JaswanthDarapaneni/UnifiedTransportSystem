import { ComponentFixture, TestBed } from '@angular/core/testing';
import { welcomePage } from './welcome.page';

describe('welcomePage', () => {
  let component: welcomePage;
  let fixture: ComponentFixture<welcomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(welcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
