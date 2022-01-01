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
    siteName = 'AlexGrigCorp';


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
                    message: 'Данное приложение создавалось в рамках изучения фреймоврка Spring(Java). Angular - в качестве ' +
                      'ознакомительного курса и понимание основных концептов.'
                },
                width: '400px'
            });

    }

}
