import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalexpComponent } from './professionalexp.component';

describe('ProfessionalexpComponent', () => {
  let component: ProfessionalexpComponent;
  let fixture: ComponentFixture<ProfessionalexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
