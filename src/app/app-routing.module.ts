import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GrafikComponent } from './grafik/grafik.component';

const routes: Routes = [
  { path: 'card', component: ContentComponent },
  { path: 'grafik', component: GrafikComponent },
  { path: '', redirectTo: 'card', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
