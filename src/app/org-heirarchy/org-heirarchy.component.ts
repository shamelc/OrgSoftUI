import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { DataService } from '../data.service';

export interface OrgHeirarchy {
  id?: number;
  name: string;
  level: number;
  description: string;
}

const ELEMENT_DATA: OrgHeirarchy[] = [
  {id: 1, name: 'State Committee', level: 1, description: 'State Committee'},
  {id: 2, name: 'District Committee', level: 2, description: ''},
  {id: 3, name: 'Local Committee', level: 3, description: ''},
  {id: 4, name: 'Unit', level: 4, description: ''},
];

@Component({
  selector: 'app-org-heirarchy',
  templateUrl: './org-heirarchy.component.html',
  styleUrls: ['./org-heirarchy.component.scss']
})
export class OrgHeirarchyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'level', 'description'];
  dataToDisplay = [...ELEMENT_DATA];
  isAdd = false;
  dataSource = new OrgDataSource(this.dataToDisplay);


  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getOrgHeirarchy().subscribe(data => {
      this.dataSource.setData(data);
    });

  }

  newOrgAdded(data: any) {
    this.dataSource.setData(data);
  }


}

class OrgDataSource extends DataSource<OrgHeirarchy> {
  private _dataStream = new ReplaySubject<OrgHeirarchy[]>();

  constructor(initialData: OrgHeirarchy[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<OrgHeirarchy[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: OrgHeirarchy[]) {
    this._dataStream.next(data);
  }
}
