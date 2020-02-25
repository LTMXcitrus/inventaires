import {Container} from './model';
import {LotPaps} from './lot-local';

const allLots: Container = {
  id: 'all',
  elements: [
    LotPaps
  ]
};

export const findContainer = (id: string, lot: Container = allLots): Container => {
  if (lot.id === id) {
    return lot;
  }
  return lot.elements
    .filter(element => element['id'] !== undefined)
    .map(l => findContainer(id, l as Container))
    .filter(l => l !== undefined)[0];
};

export const findParentContainerOf = (id: string, lot: Container = allLots): Container => {
  if (lot.id === id) {
    return undefined;
  }
  const nextLevel = lot.elements
    .filter(element => element['id'] !== undefined)
    .map(l => ((l as Container).elements as Container[]).map(el => el.id).indexOf(id) !== -1 ? (l as Container) : undefined)
    .filter(l => l !== undefined)[0];

  if (nextLevel) {
    return nextLevel;
  }

  return lot.elements
    .filter(element => element['id'] !== undefined)
    .map(l => findParentContainerOf(id, l as Container))
    .filter(l => l !== undefined)[0];
};
