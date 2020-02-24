import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Container} from '../data/model';
import {findContainer} from '../data/all';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  container: Container;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(map => {
      this.container = findContainer(map.get('id'));
    });
  }

}
