import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img', '=>', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = '../../../assets/images/default.png';
/*   counter = 0;
  counterFn: number | undefined; */

  constructor() {
    // befor render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);

  }

  ngOnChanges(changes: SimpleChanges): void{
    // before - during render
    // changes inputs -- many times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);

  }

  ngOnInit(): void{
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
/*     this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('Run counter');
    }, 1000); */
  }

  ngAfterViewInit(): void{
    // after render
    // handler children
    console.log('ngAfterViewInit', 'imgValue =>', this.img);
  }

  ngOnDestroy(): void{
    // delete
    console.log('ngOnDestroy');
    /* window.clearInterval(this.counterFn); */
  }

  imgError(){
    this.img = this.imgDefault;
  }

  imgLoaded(){
    console.log('img loaded - hijo');
    this.loaded.emit(this.img);
  }

}
