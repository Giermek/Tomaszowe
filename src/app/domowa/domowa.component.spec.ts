/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DomowaComponent } from './domowa.component';

describe('DomowaComponent', () => {
  let component: DomowaComponent;
  let fixture: ComponentFixture<DomowaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomowaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
