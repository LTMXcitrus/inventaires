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
