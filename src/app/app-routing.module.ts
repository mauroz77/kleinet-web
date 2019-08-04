import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'content/:id',      component: PageComponent },
  { path: '***',      component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
