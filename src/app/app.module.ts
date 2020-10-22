import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CreateTaskModalComponent } from './create-task-modal/create-task-modal.component';
import { HomeComponent } from './pages/home/home.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { DragDropModule } from '@angular/cdk/drag-drop'

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskModalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    NzPageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
