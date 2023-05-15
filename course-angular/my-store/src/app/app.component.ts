import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  imgParent = 'https://www.w3schools.com/w3css/img_lights.jpg';
  showImg = true;

  onLoaded(img: string) {
    console.log('img loaded - padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
