import { ComponentFixture, TestBed } from '@angular/core/testing';
import { favoritePage } from "./favorite.page";

describe('favoritePage', () => {
  let component: favoritePage;
  let fixture: ComponentFixture<favoritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(favoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
