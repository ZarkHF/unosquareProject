import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameToysService } from 'src/app/shared/gametoys.service';
import { GameToysModel } from '../../shared/gametoys.model';

@Component({
  selector: 'app-gametoys',
  templateUrl: './gametoys.component.html',
  styleUrls: ['./gametoys.component.scss']
})
export class GametoysComponent implements OnInit {

  gametoyArray: Array<any>;
  gametoySuscription: Subscription;

  visibleForm = false;

  tableContent = [
    { field: 'Id', header: 'Id', width: '5vw' },
    { field: 'Name', header: 'Name', width: '5vw' },
    { field: 'MaxAge', header: 'Age', width: '5vw' },
    { field: 'Price', header: 'Price', width: '5vw' },
    { field: 'Company', header: 'Company', width: '5vw' },
    { field: 'Actions', header: '', width: '5vw' }
  ]

  constructor(
    public service: GameToysService
  ) {
    this.gametoyArray = [
      {
        Id: 1,
        Name: "Barbie Developer",
        MaxAge: 12,
        Price: 25.99,
        Company: "Mattel",
        Description: ""
      },
      {
        Id: 2,
        Name: "xyc",
        MaxAge: 4,
        Price: 75.5,
        Company: "Marvel",
        Description: ""
      },
      {
        Id: 3,
        Name: "abc",
        MaxAge: 18,
        Price: 99.99,
        Company: "Nintendo",
        Description: ""
      }
    ];
  }

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    /* console.log('onSearch', request); */
    /* this.service.GetInventory(); */

    /* this.gametoySuscription =  */this.service.GetInventory().subscribe(it => {
      console.log('response', it);
    });
  }

}
