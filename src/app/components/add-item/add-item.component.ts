import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ExperienceService } from '../../services/experience.service';
import { Item } from '../../models/item'
import { Experience } from '../../models/experience'
import { from } from 'rxjs';
import{Router, ActivatedRoute}from '@angular/router'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: '',
    date: '',
    newCases: '',
    newDeaths: '',
    hospitalEX: '',
    recovered: '',
    totalDeath: '',
    totalCases: '',
    name: '',
    password: '',

  }
  experience: Experience = {
    title: '',
    description: '',
    date: '',
    name: '',
    password: '',

  }
  constructor(private router :Router, private itemService: ItemService , private experienceService: ExperienceService,  private route: ActivatedRoute, ) { }

  ngOnInit() {
  }
  onSubmit(){
    debugger;
    if(this.item.date != '' &&
       this.item.newCases != '' && this.item.newDeaths != '' && 
       this.item.hospitalEX != '' && this.item.recovered != '' &&
       this.item.totalDeath != '' && this.item.totalCases != ''  )
       {
      this.itemService.addItem(this.item);
      this.item.newCases = '',
      this.item.date = '',
      this.item.newDeaths = '',
      this.item.hospitalEX = '',
      this.item.recovered = '',
      this.item.totalDeath = '',
      this.item.totalCases = '';
    }
  
  }



  isHidden: boolean = false;
click(){
    this.isHidden = !this.isHidden;
}
  onSubmit2(){
      if(this.experience.date != '' 
      )
         {
        this.experienceService.addErience(this.experience);
        this.experience.date = ''
    
      }
    }


myExperience(){
  this.router.navigate(['myExperience'])
}
Cases(){
  this.router.navigate(['Cases'])
}

}
