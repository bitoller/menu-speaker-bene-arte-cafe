import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './_shared/components/layout/layout.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { BeneArteCafeComponent } from './bene-arte-cafe/bene-arte-cafe.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'instructions', component: InstructionsComponent },
      { path: 'bene-arte-cafe', component: BeneArteCafeComponent },
      { path: 'menu', component: MenuComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
