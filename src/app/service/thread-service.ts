import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Thread} from "../model/thread";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ThreadService {

    constructor(private http: HttpClient) {}

    getHotThreads(subreddits: string): Observable<Array<Thread>> {
        return this.http.get<Array<Thread>>('http://localhost:1346/threads/hot', {
            params: new HttpParams().set('subreddits', subreddits)
        });
    }
}
