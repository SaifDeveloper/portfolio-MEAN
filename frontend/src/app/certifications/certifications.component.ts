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

  verify(){
    // this.router.navigate(['https://www.google.com'])
    window.location.href = "https://www.google.com";
  }

}
