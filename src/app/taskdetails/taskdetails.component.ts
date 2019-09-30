import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../table.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Task } from '../models/task.model'


@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})

export class TaskdetailsComponent implements OnInit {

  post: Task[];

  constructor (private route: ActivatedRoute, private router: Router, private tableService: TableService, public dialog: MatDialog) { }

  ngOnInit() {
    this.post = this.tableService.getTask(); 
    //Add ID of clicked item to the post variable
    this.post = this.post.filter(item => item.id ==  this.route.snapshot.params['id']);
  }


  openDialog (action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

      //Call table-service and do operations

      if (result.event == 'Update') {
        this.tableService.updateTask(result.data);
      } 

      else if (result.event == 'Delete One') {
        this.tableService.deleteTaskByIndex(result.data.id);
        //When current Task is deleted, return to the homepage
        this.router.navigate(['../../home'])
      }

    });
  }

}
