import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentGuard: CanActivateFn = () => {

    const router = inject(Router);

    if(localStorage.getItem('role')=='Student'){

        return true;

    }

    router.navigate(['/login']);

    return false;

};

export const recruiterGuard: CanActivateFn = () => {

    const router = inject(Router);

    if(localStorage.getItem('role')=='Recruiter'){

        return true;

    }

    router.navigate(['/login']);

    return false;

};

export const placementGuard: CanActivateFn = () => {

    const router = inject(Router);

    if(localStorage.getItem('role')=='Placement Cell'){

        return true;

    }

    router.navigate(['/login']);

    return false;

};