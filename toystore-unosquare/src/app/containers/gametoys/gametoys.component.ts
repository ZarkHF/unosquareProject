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

  tableContent = [
    { field: 'Id', header: 'Id', width: '5vw' },
    { field: 'Name', header: 'Name', width: '5vw' },
    { field: 'Age', header: 'Age', width: '5vw' },
    { field: 'Price', header: 'Price', width: '5vw' },
    { field: 'Company', header: 'Company', width: '5vw' },
    { field: 'Id', header: 'Id', width: '5vw' },
    { field: 'Actions', header: '', width: '5vw' }
  ]
  
  constructor(
    public service: GameToysService
  ) {
    this.gametoyArray = [];
  }

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    /* console.log('onSearch', request); */
    this.service.GetInventory();

    /* this.gametoySuscription = this.service.GetInventory().subscribe(it => {
      console.log('response', it);
    }); */
  }

}
