import { Component } from '@angular/core';
import { FullImgComponent } from "../full-img/full-img.component";

@Component({
    selector: 'app-meals',
    standalone: true,
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.scss', '../page.scss'],
    imports: [FullImgComponent]
})
export class MealsComponent {

}
