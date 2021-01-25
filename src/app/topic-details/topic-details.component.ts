import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../interfaces/topic';
import { Topics } from '../topics-mocks';
import { TopicsComponent } from '../topics/topics.component';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  t: Topic;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getTopic();
  }


  getTopic(){
    const id = this.route.snapshot.paramMap.get('id');
    this.t = Topics.find(e => e.id === id)
  }

  getAvatar(){
    return "assets/img/" + this.t.avatar + ".jpg"
  }

  goBack(): void {
    this.location.back();
  }


}
