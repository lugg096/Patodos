import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from '../services/guards/login.guard';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { ForminvitacionComponent } from './forminvitacion/forminvitacion.component';
import { FormayudaComponent } from './formayuda/formayuda.component';

const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'ayudas', component: PrincipalComponent, data: { titulo: 'Ayudas' } },
            { path: 'invitaciones', component: InvitacionesComponent, data: { titulo: 'Invitaciones' } },
            { path: 'finvitacion', component: ForminvitacionComponent, data: { titulo: 'Crear Invitación' } },
            { path: 'fayuda', component: FormayudaComponent, data: { titulo: 'Solicitar Ayuda' } },
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil' } },
            { path: '', redirectTo: '/ayudas', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
