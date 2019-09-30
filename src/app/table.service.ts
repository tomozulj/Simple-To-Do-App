import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { formatDate } from '@angular/common'


@Injectable({
  providedIn: 'root'
})
export class TableService {

  //Custom display format
  private format = 'dd.MM.yyyy - HH:mm'; 


  //Adding random numbers as ID
  myTasks: Task [] = [
    {id: Math.floor((Math.random()*1000)+1), name: 'Kupiti naranče', description: "Lidl - 2kg", date: formatDate("2019-09-24 10:00", this.format, "en-US")}, 
    {id: Math.floor((Math.random()*1000)+1), name: 'Počistiti stan', description: "", date: formatDate("2019-09-25 17:45", this.format, "en-US")},
    {id: Math.floor((Math.random()*1000)+1), name: 'Čestitati kumi rođendan', description: "45. rođendan", date: formatDate("2019-09-26 08:00", this.format, "en-US")}
  ];

  constructor() { 
  }

  getTask () {
    return this.myTasks;
  }

  addTask (data) {
    this.myTasks.push({ 
      id: Math.floor((Math.random()*1000)+1), 
      name: data.name, 
      description: data.description, 
      date: formatDate(Date.now(), this.format, "en-US")
    });
  }

  updateTask (data) {
    this.myTasks = this.myTasks.filter((value,key) => {
      if(value.id == data.id){
        value.name = data.name;
        value.description = data.description;
      }
      return true;
    });
  }

  deleteTask (start, deleteCount) {
    this.myTasks.splice(start, deleteCount);
  }

  deleteTaskByIndex(id: number) {

    for ( var i = 0; i <= this.myTasks.length; i++) {
      if(this.myTasks[i].id == id){
        this.myTasks.splice(i, 1)
      }
    }
    
  }

}
