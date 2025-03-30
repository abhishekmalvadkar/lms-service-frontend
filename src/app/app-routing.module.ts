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

const routes: Routes = [
  {
     path:'' , component : SigninAccountComponent

  },
  {
    path:'add-tag',component:AddTagComponent
  },
  {
     path:'tag-list', component : TagListComponent
  },

  {
    path:'link-list', component:LinkListComponent
  }
   ,
   {
      path:'add-link',component:AddLinkComponent
   },
    {
       path:'create-account',component:CreateAccountComponent
    },
    {
      path:'verify-account', component : VerifyAccountComponent
    },
    {
      path:'signIn',component :SigninAccountComponent
    },
    {
      path:'verify-signIn',component:VerifySigninacoountComponent
    },
  {
    path:'**', component : TagListComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
