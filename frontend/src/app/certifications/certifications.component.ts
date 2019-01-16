import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verify(certificate){
    switch(certificate){
      case 'buildDapps':{
          window.open("https://www.udemy.com/certificate/UC-B2Z3I1OJ/", "_blank");
      }
      case 'Udemy_sg_Eth':{
        window.open("https://www.udemy.com/certificate/UC-2W6TP01I/", "_blank");
      }
      case 'Udemy_sg_GO':{
        window.open("https://www.udemy.com/certificate/UC-ABAVBWFX/", "_blank");
      }
      case 'coursera_ibm_iot':{
        window.open("https://www.coursera.org/account/accomplishments/verify/NZ4W9D6RUPEQ", "_blank");
      }
      case 'py_coursera':{
        window.open("https://github.com/SaifDeveloper/react-docker", "_blank");
      }
    }
  }

}
