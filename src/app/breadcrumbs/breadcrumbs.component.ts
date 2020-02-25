import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Breadcrumbs, createBreadcrumbs} from './breadcrumbs';
import {filter} from 'rxjs/operators';
import {findParentContainerOf} from '../data/all';
import {Container} from '../data/model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: Breadcrumbs[];

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((next: NavigationEnd) => {
        this.breadcrumbs = createBreadcrumbs(this.route, '');
        const currentLocation = this.router.parseUrl(this.router.url).queryParams['id'];
        if (currentLocation) {
          const parentLocation = findParentContainerOf(currentLocation);
          if (parentLocation.label) {
            this.breadcrumbs.push(this.buildBreadcrumbForContainer(next.url, parentLocation));
          }
        }
        this.breadcrumbs.forEach((b, i) => {
          if (i > 0 && i < this.breadcrumbs.length - 1) {
            b.label = '...';
          }
        });
      });
  }

  private buildBreadcrumbForContainer(currentUrl: string, container: Container): Breadcrumbs {
    const label = container.label;
    const url = currentUrl.slice(0, currentUrl.indexOf('?'));
    const query = container.id;
    return {label, url, query};
  }


}
