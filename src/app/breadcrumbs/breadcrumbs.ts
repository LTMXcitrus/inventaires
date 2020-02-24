import {ActivatedRoute} from '@angular/router';

export interface Breadcrumbs {
  url: string;
  label: string;
}


export const createBreadcrumbs = (route: ActivatedRoute, url: string, breadcrumbs: Breadcrumbs[] = []): Breadcrumbs[] => {
  const children: ActivatedRoute[] = route.children;

  const routeUrl = route.snapshot.url.map(segment => segment.path).join('/');
  if (routeUrl !== '') {
    url += `/${routeUrl}`;
  }

  const label: string = route.snapshot.data.breadcrumb;
  if (label) {
    breadcrumbs.push({label, url});
  }

  if (children.length === 0) {
    return breadcrumbs;
  }
  return createBreadcrumbs(children[0], url, breadcrumbs);
};

