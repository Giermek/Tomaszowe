/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazienkowaComponent } from './lazienkowa.component';

describe('LazienkowaComponent', () => {
  let component: LazienkowaComponent;
  let fixture: ComponentFixture<LazienkowaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazienkowaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazienkowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
