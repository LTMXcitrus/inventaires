export interface KitElement {
  label: string;
  quantity?: number;
}


interface IContainer {
  id: string;
  elements: (KitElement | Container)[];
  label?: string;
}

export class Container implements IContainer {
  elements: (KitElement | Container)[];
  id: string;
  label?: string;

  constructor(
    id: string,
    elements: (KitElement | Container)[],
    label?: string
  ) {
  }
}

