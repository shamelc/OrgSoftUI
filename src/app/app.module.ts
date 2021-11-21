import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrgHeirarchyComponent } from './org-heirarchy/org-heirarchy.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { AddOrgHeirarchyComponent } from './org-heirarchy/add-org-heirarchy/add-org-heirarchy.component'
import { FormsModule } from '@angular/forms';

import { MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    OrgHeirarchyComponent,
    HomeComponent,
    AddOrgHeirarchyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
