import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrgHeirarchy } from './org-heirarchy/org-heirarchy.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  orgHeirarchyData: OrgHeirarchy[] = [
    {id: 1, name: 'State Committee', level: 1, description: 'State Committee'},
    {id: 2, name: 'District Committee', level: 2, description: 'District Committee'},
    {id: 3, name: 'Local Committee', level: 3, description: ''},
    {id: 4, name: 'Unit', level: 4, description: ''},
  ];

  constructor() { }

  getOrgHeirarchy() : Observable<Array<OrgHeirarchy>> {
    return of(this.orgHeirarchyData);
  }

  addOrgHeirarchy(data: OrgHeirarchy) {
    data.id = this.orgHeirarchyData.length + 1;
    this.orgHeirarchyData.push(data);
    console.log(this.orgHeirarchyData);
  }

}
