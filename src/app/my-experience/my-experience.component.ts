import { Component, OnInit ,ViewChild} from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Item } from '.././models/item';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Experience } from '.././models/experience';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.scss']
})
export class MyExperienceComponent implements OnInit {
  experience: Experience[];


  items2: { date: string; description: string; name: string;  }[];
  constructor(private ExperienceService: ExperienceService) { }


  displayedColumns: string[] = ['show','description','name', 'date'   ];
  dataSource = new MatTableDataSource<Item>(this.experience);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;




  ngOnInit() {
    this.ExperienceService.getErience().subscribe(experience => {
      this.dataSource.data = experience;
      console.log(experience)
      });
      this.dataSource.paginator = this.paginator;
      this.experience= [
  
      ]; 
    
  }
  getexpErience(){
    return this.experience;
  }

}
