import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CityContainerComponent} from './city/city.container.component';


const routes: Routes = [
      {path: 'users', loadChildren: () => import('./user/user.module').then(r =>  r.UserModule)},
      {path: 'weather', component: CityContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
