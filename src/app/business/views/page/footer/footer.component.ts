import {Component, OnInit} from '@angular/core';
import {AboutDialogComponent} from '../../dialog/about-dialog/about-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

// "presentational component": отображает полученные данные
// подвал - нижняя часть страницы
export class FooterComponent implements OnInit {
    year: Date;
    site = 'https://javabegin.ru/';
    course = 'http://101112.ru/ang-spring-auth';

    blog = 'https://javabegin.ru/blog/tag/angular/';
    siteName = 'JavaBegin';


    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.year = new Date(); // текуший год

    }

    // окно "О программе"
    openAboutDialog(): void {
        this.dialog.open(AboutDialogComponent,
            {
                autoFocus: false,
                data: {
                    dialogTitle: 'О программе',
                    message: 'Данное приложение было создано для видеокурса "Angular+Java/SprigBoot/Hibernate" на сайте javabegin.ru'
                },
                width: '400px'
            });

    }

}
