import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerosnalProjectsComponent } from './perosnal-projects.component';

describe('PerosnalProjectsComponent', () => {
  let component: PerosnalProjectsComponent;
  let fixture: ComponentFixture<PerosnalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerosnalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerosnalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
