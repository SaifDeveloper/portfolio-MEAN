import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professionalexp',
  templateUrl: './professionalexp.component.html',
  styleUrls: ['./professionalexp.component.css']
})
export class ProfessionalexpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  graduated = new Date(2016, 3, 4);
  joined_ibm = new Date(2016, 5, 20);
  outotec_ac = new Date(2016, 8, 6);
  blockchain_garage = new Date(2017, 8, 11);
  trade_finance = new Date(2017, 8, 12);
  pg_GOAT = new Date(2017, 10, 4);
  telstra = new Date(2018, 0, 3);
  pg_TIP = new Date(2018, 3, 9);
  telefonica = new Date(2018, 6, 12);
  yosemite = new Date(2018, 11, 3);

}
