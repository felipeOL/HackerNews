import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Story} from "../model/story.model";

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private httpClient:HttpClient) {}

  private apiUrl: string = 'https://hacker-news.firebaseio.com/v0';

  getBestStories():Observable<number[]>{
    return this.httpClient.get<number[]>(
      `${this.apiUrl}/topstories.json?print=pretty`);
  }

  getStory(id: number):Observable<Story>{
    return this.httpClient.get<Story>(`${this.apiUrl}/item/${id}.json?print=pretty`)
  }
}
