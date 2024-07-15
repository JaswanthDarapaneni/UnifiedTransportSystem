import { ComponentFixture, TestBed } from '@angular/core/testing';
import { welcomeNotePage } from './welcome-note.page';

describe('welcomeNotePage', () => {
  let component: welcomeNotePage;
  let fixture: ComponentFixture<welcomeNotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(welcomeNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
