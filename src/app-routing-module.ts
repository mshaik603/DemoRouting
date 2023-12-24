import {NgModule} from '@angular/core';
import {Router,RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MemberSearchComponent } from './app/member-search/member-search.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'test', component:MemberSearchComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class AppRoutingModule{

}