import { Component, OnInit } from '@angular/core';
import {TutorialService} from 'src/app/services/tutorial.service'

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  tutorials:any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
 
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials()
  }

  retrieveTutorials():void{
    this.tutorialService.getAll()
    .subscribe(
      data =>{
        this.tutorials = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

}
