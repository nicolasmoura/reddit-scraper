import {Component} from '@angular/core';
import {Thread} from "./model/thread";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ThreadService} from "./service/thread-service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    public subreddits: string;
    public threads: Array<Thread> = [];
    public sendButtonIconConfig = "fa-bomb";
    public alreadyExecuted: boolean = false;
    constructor(private http: HttpClient, private threadService: ThreadService) {
    }

    public getHotThreads() {
        this.turnOnLoadingGif();
        this.threads = [];
        this.threadService.getHotThreads(this.subreddits)
            .subscribe(hotThreads => {
                this.threads = hotThreads;
                this.turnOffLoadingGif();
                this.alreadyExecuted = true;
            }, err => {
                console.log(err);
            });
    }

    public turnOnLoadingGif() {
        this.sendButtonIconConfig = 'fa-circle-o-notch fa-spin';
    }

    public turnOffLoadingGif() {
        this.sendButtonIconConfig = 'fa-bomb'
    }

}
