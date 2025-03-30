import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { FormsModule } from '@angular/forms';
import { AddTagComponent } from './add-tag/add-tag.component';
import { RouterModule,Routes } from '@angular/router';
import { LinkListComponent } from './link-list/link-list.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { SigninAccountComponent } from './auth/signin-account/signin-account.component';
import { VerifySigninacoountComponent } from './auth/verify-signIn-otp/verify-signIn-otp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TagListComponent,
    AddTagComponent,
    LinkListComponent,
    AddLinkComponent,
    CreateAccountComponent,
    SigninAccountComponent,
    VerifySigninacoountComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    BlockUIModule,
    MultiSelectModule,
    MenubarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
