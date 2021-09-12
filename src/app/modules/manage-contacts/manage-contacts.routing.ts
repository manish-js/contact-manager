import { ContactsManagerComponent } from './contacts-manager/contacts-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
    {
        path: '',
        component: CompaniesComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Encora - Companies'
        }
    },
    {
        path: 'contacts',
        component: ContactsManagerComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Encora - Contacts'
        }
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ManageContactsRoutingModule { }
