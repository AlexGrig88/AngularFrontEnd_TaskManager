import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './auth/register/register.component';
import {MustMatchDirective} from './auth/directive/must-match.directive';
import {InfoPageComponent} from './auth/info-page/info-page.component';
import {ActivateAccountComponent} from './auth/activate-account/activate-account.component';
import {SendEmailResetPasswordComponent} from './auth/reset-password/send-email/send-email-reset-password.component';
import {UpdatePasswordComponent} from './auth/reset-password/update/update-password.component';
import {RequestInterceptor} from './auth/interceptor/request-interceptor.service';
import {MainComponent} from './business/views/page/main/main.component';
import {TASK_URL_TOKEN} from './business/data/dao/impl/TaskService';
import {CATEGORY_URL_TOKEN} from './business/data/dao/impl/CategoryService';
import {PRIORITY_URL_TOKEN} from './business/data/dao/impl/PriorityService';
import {STAT_URL_TOKEN} from './business/data/dao/impl/StatService';
import {environment} from '../environments/environment';
import {SidebarModule} from 'ng-sidebar';
import {CategoriesComponent} from './business/views/page/categories/categories.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {registerLocaleData} from '@angular/common';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import localeRu from '@angular/common/locales/ru';
import {EditCategoryDialogComponent} from './business/views/dialog/edit-category-dialog/edit-category-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {ConfirmDialogComponent} from './business/views/dialog/confirm-dialog/confirm-dialog.component';
import {HeaderComponent} from './business/views/page/header/header.component';
import {StatCardComponent} from './business/views/page/stat/stat-card/stat-card.component';
import {StatComponent} from './business/views/page/stat/stat.component';
import {TaskListComponent} from './business/views/page/tasks/tasks.component';
import {EditTaskDialogComponent} from './business/views/dialog/edit-task-dialog/edit-task-dialog.component';
import {TaskDatePipe} from './business/pipe/task-date.pipe';
import {TasksMatPaginatorIntl} from './business/intl/TasksMatPaginatorIntl';
import {AccessDeniedComponent} from './auth/access-denied/access-denied.component';
import {SettingsDialogComponent} from './business/views/dialog/settings-dialog/settings-dialog.component';
import {EditPriorityDialogComponent} from './business/views/dialog/edit-priority-dialog/edit-priority-dialog.component';
import {PrioritiesComponent} from './business/views/page/priorities/priorities.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {ShowSpinnerInterceptor} from './business/spinner/http-interceptor';
import {FooterComponent} from './business/views/page/footer/footer.component';
import {AboutDialogComponent} from './business/views/dialog/about-dialog/about-dialog.component';



registerLocaleData(localeRu);


// ?????? ???????????????? ?????????????????? ???? ????????
function HttpLoaderFactory(httpClient: HttpClient): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(httpClient, [
    {prefix: environment.frontendURL + '/assets/i18n/', suffix: '.json'} // ???????? ?? ?????????? ?? ?????????????? ????????????
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MustMatchDirective,
    InfoPageComponent,
    ActivateAccountComponent,
    SendEmailResetPasswordComponent,
    UpdatePasswordComponent,
    MainComponent,
    CategoriesComponent,
    EditCategoryDialogComponent,
    ConfirmDialogComponent,
    HeaderComponent,
    StatCardComponent,
    StatComponent,
    TaskListComponent,
    EditTaskDialogComponent,
    TaskDatePipe,
    AccessDeniedComponent,
    SettingsDialogComponent,
    EditPriorityDialogComponent,
    PrioritiesComponent,
    FooterComponent,
    AboutDialogComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SidebarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory, // ?????? ????????????????  ?????????????????? ???? ????????
        deps: [HttpClient]
      }
    }),
    MatTabsModule,
    MatRadioModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    ColorPickerModule,

  ],
  providers: [ // ?????????????????????????? ?????????????????? ???????????????? ?? ?????????????? ??????????????????????

    /* ?????????? ?????????????????? ?????? ???????????????????? ???????????? ???????????????????? ???????? */
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },


    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},


    {
      provide: TASK_URL_TOKEN,
      useValue: environment.backendURL + '/task'
    },

    {
      provide: CATEGORY_URL_TOKEN,
      useValue: environment.backendURL + '/category'
    },


    {
      provide: PRIORITY_URL_TOKEN,
      useValue: environment.backendURL + '/priority'
    },


    {
      provide: STAT_URL_TOKEN,
      useValue: environment.backendURL + '/stat'
    },

    {
      provide: MatPaginatorIntl, useClass: TasksMatPaginatorIntl
    },

    {
      provide: HTTP_INTERCEPTORS, // ?????? HTTP ?????????????? ?????????? ?????????????????????? ?? ???????????????????????? ???????????????????? ????????????????
      useClass: ShowSpinnerInterceptor,
      multi: true
    },

  ],
  entryComponents: [ // https://angular.io/guide/entry-components
    EditCategoryDialogComponent,
    ConfirmDialogComponent,
    EditTaskDialogComponent,
    SettingsDialogComponent,
    EditPriorityDialogComponent,
    AboutDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
