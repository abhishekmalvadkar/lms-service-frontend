import { VerifyAccountComponent } from './auth/verify-account/verify-account.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTagComponent } from './add-tag/add-tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { LinkListComponent } from './link-list/link-list.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { SigninAccountComponent } from './auth/signin-account/signin-account.component';
import { VerifySigninacoountComponent } from './auth/verify-signIn-otp/verify-signIn-otp.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './shared/auth.guard';
import { authRedirectGuard } from './shared/auth-redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'link-list', pathMatch: 'full' }, // Redirect to link-list
      { path: 'add-tag', component: AddTagComponent },
      { path: 'tag-list', component: TagListComponent },
      { path: 'link-list', component: LinkListComponent },
      { path: 'add-link', component: AddLinkComponent }
    ]
  },
  { path: 'sign-in', component: SigninAccountComponent, canActivate: [authRedirectGuard] },
  { path: 'create-account', component: CreateAccountComponent, canActivate: [authRedirectGuard] },
  { path: 'verify-account', component: VerifyAccountComponent, canActivate: [authRedirectGuard] },
  { path: 'verify-signIn', component: VerifySigninacoountComponent, canActivate: [authRedirectGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
