import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OrgHeirarchy } from '../org-heirarchy.component';

@Component({
  selector: 'app-add-org-heirarchy',
  templateUrl: './add-org-heirarchy.component.html',
  styleUrls: ['./add-org-heirarchy.component.scss']
})
export class AddOrgHeirarchyComponent implements OnInit {

  @Input('isAdd') isAdd = false;

  @Output()
  addClose = new EventEmitter();

  @Output()
  added = new EventEmitter<OrgHeirarchy[]>();

  orgHeirarchy: OrgHeirarchy = {
    name: '',
    level: 0,
    description: ''
  };
  constructor(private dataService: DataService) { }


  ngOnInit(): void {
  }

  addCloseEmit() {
    this.addClose.emit('');
  }

  add() {
    this.dataService.addOrgHeirarchy(this.orgHeirarchy);
    this.added.emit(this.dataService.orgHeirarchyData);
  }

}
