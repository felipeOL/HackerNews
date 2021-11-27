import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StoriesService} from "../../services/stories.service";
import {Story} from "../../model/story.model";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  providers: [DatePipe]
})
export class StoryComponent implements OnInit {
  idStories: number[] = [];
  storyList:Story[] = [];
  loading:boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _storiesService:StoriesService) {}

  ngOnInit(): void {
    this._storiesService.getBestStories().subscribe((id:number[]) => {
      this.idStories = id;
      this.loadPage(0);
    })
  }

  pageHandler(event:PageEvent){
   this.loadPage(event.pageIndex);
  }

  loadPage(pageIndex:number){
    const indexes = this.idStories.slice(50*pageIndex,50*pageIndex+50);

    this.storyList = [];
    indexes.forEach((index:number) => {
      this._storiesService.getStory(index).subscribe((story:Story) => {
        this.storyList = [...this.storyList,story];
      })
      this.loading = true;
    })
  }

  cardContent(story:Story):string{
    const comments = story.kids == null ? 0 : story.kids.length
    const content = `${story.score} puntos | creado por: ${story.by} | ${story.type} | ${comments} Comentarios`;
    return content;
  }

}
