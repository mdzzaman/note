import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './components/layout/public-layout/public-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './components/note/note.module#NoteModule'
            }]
    },
    {
        path: '404',
        component: PublicLayoutComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }];
