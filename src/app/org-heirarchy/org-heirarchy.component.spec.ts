import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgHeirarchyComponent } from './org-heirarchy.component';

describe('OrgHeirarchyComponent', () => {
  let component: OrgHeirarchyComponent;
  let fixture: ComponentFixture<OrgHeirarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgHeirarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgHeirarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
