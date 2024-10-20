import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CompleteMaterialsComponent } from './components/complete-materials/complete-materials.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'sobre', component: AboutComponent},
  { path: 'materiais', component: CompleteMaterialsComponent}
];
