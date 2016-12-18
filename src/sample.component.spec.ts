import { Component, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { SampleComponent } from './sample.component';

describe('Component: Sample component', () => {
  let fixture: ComponentFixture<SampleComponent>;
  let greeter: Component; 
  let element: Element;
  
  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ]
    });

    fixture = TestBed.createComponent(SampleComponent);
    greeter = fixture.componentInstance;  // to access properties and methods
    element = fixture.nativeElement;      // to access DOM element
  });
  
  it('should render `Hello World!`', () => {
    //trigger change detection
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(element.querySelector('h1').innerText).toBe('Sample component');
    });
  });

});