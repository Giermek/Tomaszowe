/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokojowaComponent } from './pokojowa.component';

describe('PokojowaComponent', () => {
  let component: PokojowaComponent;
  let fixture: ComponentFixture<PokojowaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokojowaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokojowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
