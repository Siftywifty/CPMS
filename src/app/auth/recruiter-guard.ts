import { CanActivateFn } from '@angular/router';

export const recruiterGuard: CanActivateFn = () => {

  const role = localStorage.getItem('role');

  return role === 'Recruiter';

};