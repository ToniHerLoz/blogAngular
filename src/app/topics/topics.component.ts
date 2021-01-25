import { Component, OnInit } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { Topics } from '../topics-mocks';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics = Topics;

  constructor() { }

  ngOnInit(): void {
  }


  getAvatar(t : Topic){
    return "assets/img/" + t.avatar + ".jpg"
  }

  onSelect(t : Topic){
    console.log(t.id)
  }
}
