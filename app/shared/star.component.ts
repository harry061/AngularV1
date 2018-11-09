import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({

    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class starcomponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() notif :EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onclick():void{
        this.notif.emit(`The rating is ${this.rating}`);
    }

}