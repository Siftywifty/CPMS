import { CanActivateFn } from '@angular/router';

export const placementCellGuard: CanActivateFn = () => {

  const role = localStorage.getItem('role');

  return role === 'Placement Cell';

};