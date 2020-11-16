import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingExampleComponent } from './testing-example.component';

describe('TestingExampleComponent', () => {
  let component: TestingExampleComponent;
  let fixture: ComponentFixture<TestingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
