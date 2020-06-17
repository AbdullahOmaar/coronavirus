import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment.prod';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ItemsComponent } from './components/items/items.component';
import { ItemService } from './services/item.service';
import { ExperienceService} from './services/experience.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { JwPaginationComponent } from 'jw-angular-pagination';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MyExperienceComponent } from './my-experience/my-experience.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    // JwPaginationComponent,
    MyExperienceComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'abdullah-stoer'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [ ItemService, ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
