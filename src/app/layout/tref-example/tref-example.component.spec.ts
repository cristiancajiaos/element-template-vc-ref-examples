import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrefExampleComponent } from './tref-example.component';

describe('TrefExampleComponent', () => {
  let component: TrefExampleComponent;
  let fixture: ComponentFixture<TrefExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrefExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrefExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
