import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsImagesComponent } from './projects-images.component';

describe('ProjectsImagesComponent', () => {
  let component: ProjectsImagesComponent;
  let fixture: ComponentFixture<ProjectsImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
