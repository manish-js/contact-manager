import { loginRoute } from './components/login/login.routes';
import { navbarRoute } from './components/navbar/navbar.routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy Loaded Routing for Value Prop Module
const contactModule = {
  path: 'companies',
  loadChildren: () => import ('./modules/manage-contacts/manage-contacts.module').then(m => m.ManageContactsModule)
};

const routes: Routes = [
  // Navbar Component by Named Route
  navbarRoute,
  loginRoute,
  contactModule,
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
