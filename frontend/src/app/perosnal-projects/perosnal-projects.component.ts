import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perosnal-projects',
  templateUrl: './perosnal-projects.component.html',
  styleUrls: ['./perosnal-projects.component.css']
})
export class PerosnalProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  panelOpenState = true;

  openGithub(project){
    switch(project){
      case 'fundraiser':{
          window.open("https://github.com/SaifDeveloper/kickstarter", "_blank");
      }
      case 'petshop':{
        window.open("https://github.com/SaifDeveloper/pet-Shop", "_blank");
      }
      case 'lottery':{
        window.open("https://github.com/SaifDeveloper/Lottery", "_blank");
      }
      case 'shoppingcart':{
        window.open("https://github.com/SaifDeveloper/Lottery", "_blank");
      }
      case 'automation':{
        window.open("https://github.com/SaifDeveloper/react-docker", "_blank");
      }
    }
  }

}
