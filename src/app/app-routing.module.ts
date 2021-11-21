import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrgHeirarchyComponent } from './org-heirarchy/org-heirarchy.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: OrgHeirarchyComponent,
    path: 'org'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
