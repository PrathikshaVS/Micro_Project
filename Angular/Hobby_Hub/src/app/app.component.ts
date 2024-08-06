import { Component } from '@angular/core';
import { HobbyService } from './hobby.service';
import { Hobby } from './model/Hobby';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbyArr: Hobby[];
  hobby: Hobby;
  result: string;
  flag: boolean;
  foundHobby: Hobby | null;

  constructor(private hobbyService: HobbyService) {
    this.hobbyArr = [];
    this.hobby = new Hobby();
    this.flag = false;
    this.result = " ";
    this.foundHobby = null;
  }

  insertHobby(hobby: Hobby) {
    this.hobbyService.insertHobby(hobby).subscribe(
      (response: string) => {
        this.result = response;
        this.findAllHobbies();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateHobby(hobby: Hobby) {
    this.hobbyService.updateHobby(hobby).subscribe(
      (response: string) => {
        this.result = response;
        this.findAllHobbies();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteHobby(id: number) {
    this.hobbyService.deleteHobby(id).subscribe(
      (response: string) => {
        this.result = response;
        this.findAllHobbies();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  findAllHobbies() {
    this.hobbyService.findAllHobbies().subscribe(
      (data: Hobby[]) => {
        this.hobbyArr = data;
        this.flag = true;
        this.foundHobby = null; 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  findHobby(id: number) {
    this.hobbyService.findHobby(id).subscribe(
      (data: Hobby) => {
        this.foundHobby = data;
        this.flag = false; 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
