import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

/*

 Страница для отображения информации о том, что у пользователя нет прав для просмотра

 */

@Component({
    selector: 'app-access-denied',
    templateUrl: './access-denied.component.html',
    styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {

    isMobile: boolean; // зашли на сайт с мобильного устройства или нет?


    constructor(
        private deviceService: DeviceDetectorService// для определения типа устройства
    ) {
    }

    ngOnInit(): void {
        this.isMobile = this.deviceService.isMobile();

    }

}
