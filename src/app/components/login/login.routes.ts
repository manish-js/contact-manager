import { LoginComponent } from './login.component';
import { Route } from '@angular/router';

export const loginRoute: Route = {
    path: '',
    component: LoginComponent,
    outlet: 'login'
};
