import { Routes } from '@angular/router';

import { CurrdetailComponent } from '../currdetail/currdetail.component';
import { TableComponent } from '../table/table.component';

export const routes: Routes = [
  { path: 'table',  component: TableComponent },
  { path: 'currdetail/:id',     component: CurrdetailComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
];