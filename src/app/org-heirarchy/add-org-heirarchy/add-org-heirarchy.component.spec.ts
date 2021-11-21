import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrgHeirarchyComponent } from './add-org-heirarchy.component';

describe('AddOrgHeirarchyComponent', () => {
  let component: AddOrgHeirarchyComponent;
  let fixture: ComponentFixture<AddOrgHeirarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrgHeirarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrgHeirarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
