import {Component, OnInit} from '@angular/core';
import {LotPaps} from '../../data/lot-local';

@Component({
  selector: 'app-paps',
  templateUrl: './paps.component.html',
  styleUrls: ['./paps.component.css']
})
export class PapsComponent implements OnInit {

  lot = LotPaps;

  constructor() {
  }

  ngOnInit(): void {
  }

}
