import { NgIf } from '@angular/common';
import { Component, OnInit, InjectionToken } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Proservice } from './Proservice';
import { ProserviceService } from './proservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.Observable();
  }

  title = 'My-App';
  constructor(public router: Router) {}
  // name = prompt('Enter the User Name');
  //  brand=prompt("Enter the Brand");
  brand = '';
  name = '';
  newname = '';
  key1 = false;
  key2 = false;
  image1 = '';
  h = 40;
  w = 50;
  b = 3;
  buto() {
    var oldna = prompt('Enter the New UserName');
    this.newname = `User Name Updated: ${oldna}`;
    // return `new Username:this.newname`;
  }
  img1() {
    this.image1 = 'assets\\Images\\Google.png';
  }
  color: boolean = true;
  IsItalic: boolean = true;

  multistyle() {
    let myStyle = {
      color: this.color ? 'red' : 'green',
      'font-style': this.IsItalic ? 'italic' : 'normal',
    };
    return myStyle;
  }

  bc: boolean = false;

  bool() {
    let res = confirm('Press OK to Change the Theme');
    this.bc = res;
    this.bcol();
  }
  bcol() {
    let back = {
      'background-color': this.bc ? 'pink' : 'yellow',
    };
    return back;
  }

  changeInfo: boolean = false;
  caption: string = 'Show Text';
  public changedata(): void {
    this.changeInfo = !this.changeInfo;
    if (this.changeInfo) {
      this.caption = 'Hide Text';
    } else {
      this.caption = 'Show Text';
    }
  }
  courseList = [
    {
      courseid: '1',
      coursename: 'Java programming',
      author: 'Franc',
      dob: new Date('03/07/1976'),
    },
    {
      courseid: '2',
      coursename: 'Learn Typescript programming',
      author: 'John',
      dob: new Date('12/2/1920'),
    },
  ];

  //  ngOnInit() {
  //   // Convert String obect to JSON
  //   this.stringJson = JSON.stringify(this.courseList);
  //   console.log("String json object :", this.stringJson);
  //   console.log("Type :", typeof this.stringJson);
  //   // ConvertjSON to an object
  //   this.stringObject = JSON.parse(this.stringJson);
  //   console.log("JSON object -", this.stringObject);
  //   }

  obj = [
    {
      name1: 'Ciril',
      date: '04-12-2001',
      cur1: 120000,
    },
    {
      name1: 'Shadow',
      date: '05-18-2019',
      cur1: 18000,
    },
  ];

  find: any = '';

  Movie = [
    {
      name: 'Sitha Ramam',
    },
    { name: 'Avengers' },
  ];
  cinema = [
    {
      type: 'Kollywood',
      movie: [
        { name: 'Sachin' },
        {
          name: 'Charlie',
        },
        { name: 'Avengers' },
      ],
    },
    {
      type: 'Hollywood',
      movie: [{ name: 'Kantara' }, { name: 'Su  zhal' }, { name: 'Fall' }],
    },
  ];

  toggle = 'Yes';

  persons = new Observable(function (observers) {
    try {
      observers.next('ram');
      observers.next('ravi');
      observers.next('sita');
      observers.next('Geetha');
      observers.next('john');
    } catch (e) {
      observers.error(e);
    }
  });

  Observable() {
    this.persons.subscribe((data) => {
      console.log(data);
    });
  }

  //--------------------------------------Proservice--------------------------------------------------------

  // pro_serv = new InjectionToken<ProserviceService>('pro_serv');
  // pro: Proservice[] = [];

  // ProserviceService: any;
  // constructor() {
  //   this.ProserviceService = new ProserviceService();
  // }

  // getProservice() {
  //   this.pro = this.ProserviceService.getProservice();
  // }

  //--------------------------------------------------------------------------------------------------------

  password = '';
  userid = '';
  res = '';
  login() {
    if (this.password.length > 6 && this.userid.length > 6) {
      this.res = 'Successfull';

      setTimeout(() => {
        this.router.navigate(['/contact']); 
      }, 1000);

    } else {
      this.res = 'Unsuccessful';
    }
  }
}
 