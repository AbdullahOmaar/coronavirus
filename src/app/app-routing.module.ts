import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyExperienceComponent } from './my-experience/my-experience.component'
import { ItemsComponent } from './components/items/items.component'
import { from } from 'rxjs';

const routes: Routes = [
  { 
    path:'myExperience',component: MyExperienceComponent,
  },
  
  { 
    path:'Cases',component: ItemsComponent,
  },

  { 
    path:'',component: ItemsComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
